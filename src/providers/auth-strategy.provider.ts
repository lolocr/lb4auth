import {repository} from '@loopback/repository';
import {Provider, inject, ValueOrPromise} from '@loopback/context';
import {Strategy} from 'passport';
import {LoginRepository} from '../repositories/login.repository';
import {AuthenticationBindings, AuthenticationMetadata, UserProfile} from '@loopback/authentication';
import {BasicStrategy} from 'passport-http';

export class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
constructor(
    @repository(LoginRepository) protected loginRepo: LoginRepository,
    @inject(AuthenticationBindings.METADATA) private metadata: AuthenticationMetadata,
  ) { }

  value(): ValueOrPromise<Strategy | undefined> {
    // The function was not decorated, so we shouldn't attempt authentication
    if (!this.metadata) {
      return undefined;
    }

    const name = this.metadata.strategy;
    if (name === 'BasicStrategy') {
      return new BasicStrategy({
        passReqToCallback: true
      }, this.verify);
    } else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }

  verify(
    req: any,
    username: string,
    password: string,
    cb: (err: Error | null, user?: UserProfile | false) => void,
  ) {
    console.log(this)
    // find user by name & password
    // call cb(null, false) when user not found
    // call cb(null, user) when user is authenticated
  }
}
