'use strict';

const loopbackDS = require('loopback-datasource-juggler');
const promisify = require('util').promisify;
const fs = require('fs');
const writeFile = promisify(fs.writeFile);
const mkdirp  = promisify(require('mkdirp'));

const modelsFolder      = './src/models';
const dataSourceConfig  = require('./src/datasources/db.datasource.json');
const options           = {relations: false, views:false};
const driver            = 'mssql';

const db = new loopbackDS.DataSource(dataSourceConfig);

initMain();

function initMain(){
  // Check if models directory exists
  if (!fs.existsSync(modelsFolder)){
    mkdirp(modelsFolder);
  }

  // Check arguments
  const args = require('minimist')(process.argv.slice(2))
  var result = false;
  if(!args['owner'])
  {
    console.log('[owner] argument is necessary.');
    process.exit();
  }
  if(args['all']){
    discoverAll(args['owner']).then(
      success => {
        messageOK()
        process.exit();
      },
      error => {
        messageKO()
        process.exit();
      },
    );
  }
  else if (args['schema']) {
    discoverSchema(args['owner'], args['schema']).then(
      success => {
        messageOK()
        process.exit();
      },
      error => {
        messageKO()
        process.exit();
      },
    );
  }
  else{
    console.log('Nothing to do. Introduce one of these options: [--all] or [--schema=table_name]')
    process.exit()
  }
}

function messageOK(){
  console.log('Schema generation finished succsessfully!!')
}


function messageKO(){
  console.log('Error: something went wrong!!')
}

async function discoverAll(owner){
  const schemas = []
  var options = {owner:owner} // , limit:2
  await db.discoverModelDefinitions(options).then(
    models => {
      models.forEach(function (def, index, array) {
        schemas[index] = def;
      })
    }
  );

  for(const schema of schemas){
    await discoverSchema(owner, schema.name)
  }
}

async function discoverSchema(owner, schema){
  await createModel(owner, schema).then(
    success => {
      console.log('['+schema+'] created succsessfully')
    },
    error => {
      console.log('['+schema+'] not created')
    },
  );
}

async function createModel(owner, schema){
  // Discover models and relations
  let schemaObject = null;
  await db.discoverSchemas(schema, options).then(
    object => {
      schemaObject = object;
    },
    error => {
      console.log("Table '"+schema+"' does not exist")
      messageKO();
      process.exit();
    },
  );
  const schemaName = owner+'.'+schema;

  // Get primary key
  let primaryKeys   = [];
  await db.discoverPrimaryKeys(schema, {owner:owner}).then(
    def => {
      primaryKeys = def;
    }
  )

  // Generate TS model from database schema
  var modelDefinition = "import {Entity, model, property} from '@loopback/repository'\n\n";
  modelDefinition += '@model({\n';
  modelDefinition += '\tname: "'+schema+'"\n';
  modelDefinition += '})\n'

  if(schemaObject[schemaName]){
    var modelName = '';
    var modelProperties = '';
    var modelType = '';
    for (var i in schemaObject[schemaName]) {
      if(i == 'name'){
        modelName = schemaObject[schemaName][i];
      }
      else if (i == 'properties') {
        for (var j in schemaObject[schemaName]['properties']) {
          // Data mapping properties
          var dataMapping = '\t\t'+driver+': {\n';
          var columnSchema = schemaObject[schemaName]['properties'][j][driver];
          for(var m in schemaObject[schemaName]['properties'][j][driver]){
            if(m == 'dataLength' || m == 'dataPrecision' || m == 'dataScale') dataMapping += '\t\t\t'+m+': '+schemaObject[schemaName]['properties'][j][driver][m]+',\n'
            else dataMapping += '\t\t\t'+m+': "'+schemaObject[schemaName]['properties'][j][driver][m]+'",\n'

          }
          dataMapping += '\t\t}\n';
          delete schemaObject[schemaName]['properties'][j][driver];

          // Create properties
          modelProperties += '\t@property({\n'
          modelType = '';
          for(var k in schemaObject[schemaName]['properties'][j]){
            if(k == 'type'){
              modelType = "\t"+j+": "+schemaObject[schemaName]['properties'][j][k];
            }
            if (k != 'id') modelProperties += '\t\t'+k+": "+schemaObject[schemaName]['properties'][j][k]+',\n';
          }

          // Set the primary key
          for(const pk of primaryKeys){
            if(columnSchema.columnName === pk.columnName) modelProperties += '\t\t'+k+': true,\n';
          }
          modelProperties += dataMapping;
          modelProperties += '\t})\n';
          modelProperties += modelType+';\n\n';
        }
      }
    }
    modelDefinition += "export class "+modelName+" extends Entity {\n\n";
    modelDefinition += modelProperties;
    modelDefinition += "\tconstructor(data?: Partial<"+modelName+">) {\n\t\tsuper(data);\n\t}";
    modelDefinition += '\n}';

    await writeFile(
      modelsFolder+'/'+modelName+'.model.ts',
      modelDefinition
    );

    return true;
  }

  return false;
}
