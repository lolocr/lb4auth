import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {RtvTransArticles} from '../models';
import {TransactionArticlesRepository} from '../repositories';

export class TransactionArticlesController {
  constructor(
    @repository(TransactionArticlesRepository)
    public transactionArticlesRepository : TransactionArticlesRepository,
  ) {}

  @post('/transactions-articles', {
    responses: {
      '200': {
        description: 'RtvTransArticles model instance',
        content: {'application/json': {'x-ts-type': RtvTransArticles}},
      },
    },
  })
  async create(@requestBody() rtvTransArticles: RtvTransArticles): Promise<RtvTransArticles> {
    return await this.transactionArticlesRepository.create(rtvTransArticles);
  }

  @get('/transactions-articles/count', {
    responses: {
      '200': {
        description: 'RtvTransArticles model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(RtvTransArticles)) where?: Where,
  ): Promise<Count> {
    return await this.transactionArticlesRepository.count(where);
  }

  @get('/transactions-articles', {
    responses: {
      '200': {
        description: 'Array of RtvTransArticles model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': RtvTransArticles}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(RtvTransArticles)) filter?: Filter,
  ): Promise<RtvTransArticles[]> {
    return await this.transactionArticlesRepository.find(filter);
  }

  @patch('/transactions-articles', {
    responses: {
      '200': {
        description: 'RtvTransArticles PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() rtvTransArticles: RtvTransArticles,
    @param.query.object('where', getWhereSchemaFor(RtvTransArticles)) where?: Where,
  ): Promise<Count> {
    return await this.transactionArticlesRepository.updateAll(rtvTransArticles, where);
  }

  @get('/transactions-articles/{id}', {
    responses: {
      '200': {
        description: 'RtvTransArticles model instance',
        content: {'application/json': {'x-ts-type': RtvTransArticles}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<RtvTransArticles> {
    return await this.transactionArticlesRepository.findById(id);
  }

  @patch('/transactions-articles/{id}', {
    responses: {
      '204': {
        description: 'RtvTransArticles PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() rtvTransArticles: RtvTransArticles,
  ): Promise<void> {
    await this.transactionArticlesRepository.updateById(id, rtvTransArticles);
  }

  @del('/transactions-articles/{id}', {
    responses: {
      '204': {
        description: 'RtvTransArticles DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.transactionArticlesRepository.deleteById(id);
  }
}
