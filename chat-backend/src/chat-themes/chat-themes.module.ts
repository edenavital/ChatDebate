import { Module } from '@nestjs/common';
import { ChatThemesController } from './chat-themes.controller';
import { ChatThemesService } from './chat-themes.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  controllers: [ChatThemesController],
  providers: [ChatThemesService],
})
export class ChatThemesModule {}
