import { Module } from '@nestjs/common';
import { ChatThemesController } from './chat-themes.controller';
import { ChatThemesService } from './chat-themes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EnteranceService } from 'src/socket-handlers/data.service'

@Module({
  controllers: [ChatThemesController],
  providers: [ChatThemesService,EnteranceService],
})
export class ChatThemesModule {}
