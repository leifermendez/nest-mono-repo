import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
/**
 * Esta esa la APP PRINCIPAL
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()//
  newUser(@Body() body:any): string {
    return this.appService.newUser(body)
  }
}
