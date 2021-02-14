import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { SocketHandlersService } from './socket-handlers.service';
import {DataService} from "./data.service" 
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from '../client/client.schema';
import { EnteranceSchema } from 'src/schemes/Enterance.model';


@Module({
    providers:
        [SocketHandlersService, ChatGateway,
            // DataService
        ],
    exports:
        [ChatGateway],
    imports: [
        MongooseModule.forFeature([{ name: 'Enterance', schema: EnteranceSchema }])
    ] })
export class SocketHandlersModule {}
