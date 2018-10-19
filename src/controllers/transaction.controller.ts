import { Count, CountSchema, Filter, repository, Where } from '@loopback/repository';
import {TransactionRepository} from '../repositories';
import {RtvTransactions} from '../models';
import { post, param, get, getFilterSchemaFor, getWhereSchemaFor, patch, del, requestBody, } from '@loopback/rest';
import * as HttpErrors from "http-errors";
import { Utils } from '../helpers';


export class TransactionController {
  public nothing:any;
  constructor(
    @repository(TransactionRepository)
    public transactionRepository : TransactionRepository,
  ) {}

  @post('/transactions', {
    responses: {
      '200': {
        description: 'Transaction model instance',
        content: {'application/json': {'x-ts-type': RtvTransactions}},
      },
    },
  })
  async create(@requestBody() transaction: RtvTransactions): Promise<RtvTransactions> {
    return await this.transactionRepository.create(transaction);
  }

  @get('/transactions/count', {
    responses: {
      '200': {
        description: 'Transaction model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(RtvTransactions)) where?: Where,
  ): Promise<Count> {
      if (where) {
          if (where.transDate && where.transDate !== 'null') {
              where.transDate = {"between": [Utils.parseDateToMssql(where.transDate), Utils.parseDateToMssql(where.transDate) + ' 23:59:59']}
          } else if (where.transDateStart && where.transDateStart !== 'null' && where.transDateEnd && where.transDateEnd !== 'null') {
              where.transDate = {"between": [Utils.parseDateToMssql(where.transDateStart), Utils.parseDateToMssql(where.transDateEnd) + ' 23:59:59']}
          } else {
              throw new HttpErrors.BadRequest('transDate or (transDateStart and transDateEnd) is required');
          }
      }
    return await this.transactionRepository.count(where);
  }

  @get('/transactions', {
    responses: {
      '200': {
        description: 'Array of Transaction model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': RtvTransactions}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(RtvTransactions)) filter?: Filter,
  ): Promise<RtvTransactions[]> {
    if (!filter) filter = { limit: Utils.queryDefaultLimit };
    else
      //this.nothing = this.transactionRepository.articles(20);//.find(filter)
      if (!filter.limit) filter.limit = Utils.queryDefaultLimit;
      if (filter.where) {
          if (filter.where.transDate && filter.where.transDate !== 'null') {
              filter.where.transDate = {"between": [Utils.parseDateToMssql(filter.where.transDate), Utils.parseDateToMssql(filter.where.transDate) + ' 23:59:59']}
          } else if (filter.where.transDateStart && filter.where.transDateStart !== 'null' && filter.where.transDateEnd && filter.where.transDateEnd !== 'null') {
              filter.where.transDate = {"between": [Utils.parseDateToMssql(filter.where.transDateStart), Utils.parseDateToMssql(filter.where.transDateEnd) + ' 23:59:59']}
          } else {
              // throw new HttpErrors.BadRequest('transDate or (transDateStart and transDateEnd) is required');
          }
          if (filter.where.articleId) {
            //  filter.include = [{relation: 'articles', scope: {where: {'articleId': filter.where.articleId}}}];
          }
      }
    return await this.transactionRepository.find(filter);
  }

  @patch('/transactions', {
    responses: {
      '200': {
        description: 'Transaction PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() transaction: RtvTransactions,
    @param.query.object('where', getWhereSchemaFor(RtvTransactions)) where?: Where,
  ): Promise<Count> {
    return await this.transactionRepository.updateAll(transaction, where);
  }

  @get('/transactions/{id}', {
    responses: {
      '200': {
        description: 'Transaction model instance',
        content: {'application/json': {'x-ts-type': RtvTransactions}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<RtvTransactions> {
    return await this.transactionRepository.findById(id);
  }

  @patch('/transactions/{id}', {
    responses: {
      '204': {
        description: 'Transaction PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() transaction: RtvTransactions,
  ): Promise<void> {
    await this.transactionRepository.updateById(id, transaction);
  }

  @del('/transactions/{id}', {
    responses: {
      '204': {
        description: 'Transaction DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.transactionRepository.deleteById(id);
  }
}
