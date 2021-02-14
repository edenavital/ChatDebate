import { Module } from '@nestjs/common';
import { SocketHandlersModule } from './socket-handlers/socket-handlers.module';
import { ChatThemesModule } from './chat-themes/chat-themes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentService } from './environment.service';
import { Client, ClientSchema } from './client/client.schema';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SocketHandlersModule,
    ChatThemesModule,
    MongooseModule.forRoot('mongodb+srv://ChatDebate:ChatDebate1996@cluster0.5se11.mongodb.net/ChatDebate?retryWrites=true&w=majority')
  ],
})
export class AppModule {}
