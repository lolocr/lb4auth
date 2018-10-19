import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {RtvTransArticles, RtvTransactions} from '../models';
import {inject} from '@loopback/context';

export class TransactionArticlesRepository extends DefaultCrudRepository<RtvTransArticles, typeof RtvTransArticles.prototype.transactionId> {

  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource,
  ) {
        super(RtvTransArticles, dataSource);
  }
}
