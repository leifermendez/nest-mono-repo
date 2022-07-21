import { Injectable } from '@nestjs/common';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Hola soy el microservico MAIL';
  }
}
