import { Test, TestingModule } from '@nestjs/testing';
import { MailappController } from './mailapp.controller';
import { MailappService } from './mailapp.service';

describe('MailappController', () => {
  let mailappController: MailappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MailappController],
      providers: [MailappService],
    }).compile();

    mailappController = app.get<MailappController>(MailappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mailappController.getHello()).toBe('Hello World!');
    });
  });
});
