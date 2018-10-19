import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {RtvTransArticles, RtvTransactions} from '../models';
import {TransactionArticlesRepository} from '../repositories';

export class TransactionRepository extends DefaultCrudRepository<RtvTransactions, typeof RtvTransactions.prototype.id> {

  public readonly articles: HasManyRepositoryFactory<RtvTransArticles, typeof RtvTransactions.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource,
    @repository.getter('TransactionArticlesRepository') protected getTransactionArticlesRepository: Getter<TransactionArticlesRepository>
  ) {
    super(RtvTransactions, dataSource);
    this.articles = this._createHasManyRepositoryFactoryFor('RtvTransArticles', getTransactionArticlesRepository);
  }
}
