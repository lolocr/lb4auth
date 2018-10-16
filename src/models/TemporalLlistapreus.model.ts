import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Temporal_LlistaPreus"
})
export class TemporalLlistapreus extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "maquina_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	maquinaId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 5,
		scale: 0,
		mssql: {
			columnName: "N_C",
			dataType: "smallint",
			dataLength: null,
			dataPrecision: 5,
			dataScale: 0,
			nullable: "YES",
		}
	})
	nC: Number;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ARTICLE",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	article: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PREU",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	preu: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PTS_DIFER",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsDifer: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PTS_CANON",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsCanon: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "MAX_CAR",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	maxCar: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PREUT",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	preut: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PTS_DIFERT",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsDifert: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PTS_CANONT",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsCanont: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 5,
		scale: 0,
		mssql: {
			columnName: "LINEAL",
			dataType: "smallint",
			dataLength: null,
			dataPrecision: 5,
			dataScale: 0,
			nullable: "YES",
		}
	})
	lineal: Number;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "FECHACAD",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	fechacad: Date;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVPMIN",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvpmin: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "MAX_CAR_VAL",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	maxCarVal: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "CAPACIDAD",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	capacidad: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PREUMOVIL",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	preumovil: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "insert",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	insert: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "prim",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	prim: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "article_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	articleId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "maquina",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	maquina: Number;

	constructor(data?: Partial<TemporalLlistapreus>) {
		super(data);
	}
}