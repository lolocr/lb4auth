import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Login} from '../models';
import {inject} from '@loopback/core';

export class LoginRepository extends DefaultCrudRepository<Login,typeof Login.prototype.id> {
  constructor(@inject('datasources.db') dataSource: juggler.DataSource) {
    super(Login, dataSource);
  }
}
