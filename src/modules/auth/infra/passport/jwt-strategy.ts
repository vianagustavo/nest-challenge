import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { StudentSession } from '../../models/student-session.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '76c885c4e4f1c7e6a54239a8de7aaa89',
    });
  }

  async validate(sub: string, document: string): Promise<StudentSession> {
    const subParsed = Number(sub);
    return { sub: subParsed, document };
  }
}
