import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../../data/usecases/auth.service';
import { StudentOutputDTO } from 'src/modules/students/presentation';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'document',
    });
  }

  async validate(
    document: string,
    password: string,
  ): Promise<StudentOutputDTO> {
    const student = await this.authService.validateUser(document, password);
    if (!student) {
      throw new UnauthorizedException();
    }
    return student;
  }
}
