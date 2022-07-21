import { Module } from '@nestjs/common';
import { MailappController } from './mailapp.controller';
import { MailappService } from './mailapp.service';

@Module({
  imports: [],
  controllers: [MailappController],
  providers: [MailappService],
})
export class MailappModule {}
