import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { SocketHandlersService } from './socket-handlers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from '../client/client.schema';
import { EnteranceSchema } from 'src/schemes/Enterance.model';
import { EnteranceService } from './data.service';

@Module({
    providers:
        [SocketHandlersService, ChatGateway, EnteranceService],
    exports:
        [ChatGateway],
    imports: [
        MongooseModule.forFeature([{ name: 'Enterance', schema: EnteranceSchema }])
    ], })
export class SocketHandlersModule {}
