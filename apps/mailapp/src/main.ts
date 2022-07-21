import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MailappModule } from './mailapp.module';

/**
 * Esto es el microservicio de EMAIL
 */
async function bootstrap() {
  // const app = await NestFactory.create(MailappModule);
  // await app.listen(3000);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  );
  await app.listen();
}
bootstrap();
