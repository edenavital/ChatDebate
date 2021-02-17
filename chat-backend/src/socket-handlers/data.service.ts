/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatClient } from '../client/client';
import { Client, ClientDocument, createUserEntryInDB } from '../client/client.schema';
import { onConnect, onDisconnect, onMessage } from '../events';
import { ChatSocket } from './iSocket';
import { Enterance } from 'src/schemes/Enterance.model';

/*
* Anything related to database data saving is handled here
*
*
*/
@Injectable()
export class EnteranceService {
  constructor(@InjectModel('Enterance') private readonly EnteranceModel: Model<Enterance>) {}

  async insertEnteranceLog(name: string, party: string, date: string, ip:string) {
    const newEnterance = new this.EnteranceModel({
      name,
      party,
      date,
      ip,
    });
    const result = await newEnterance.save();
    return result;
  }


export class DataService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {
    onConnect.subscribe(Socket => this.onConnect(Socket));
    onDisconnect.subscribe(Socket => this.onDisconnect(Socket));
    onMessage.subscribe(({ Socket, payload }) =>
      this.onMessage(Socket, payload),
    );
  }

  onConnect(Socket: ChatSocket) {
    const chatClient = new ChatClient(Socket);
    createUserEntryInDB(chatClient,this.clientModel)
  }

  onDisconnect(Socket: ChatSocket) {
    console.log("Test")
  }

  onMessage(Socket: ChatSocket, payload: string) {}
}
