import {repository} from '@loopback/repository';
import {LoginRepository} from '../repositories/login.repository';
import {Login} from '../models';
import {HttpErrors, get, post, param, requestBody} from '@loopback/rest';

export class LoginController {
  constructor(@repository(LoginRepository) protected loginRepo: LoginRepository) {}

  @post('/logins')
  async createLogin(@requestBody() login: Login) {
    if (!login.id) {
      throw new HttpErrors.BadRequest('id is required');
    }
    return await this.loginRepo.create(login);
  }

  @get('/logins/{id}')
  async findLoginById(@param.path.number('id') id: number): Promise<Login> {
    return await this.loginRepo.findById(id);
  }

  @get('/logins')
  async findLogins(): Promise<Login[]> {
    return await this.loginRepo.find();
  }
}
