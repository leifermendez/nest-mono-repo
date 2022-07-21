import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'MAIL_SERVICE', 
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        } },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
