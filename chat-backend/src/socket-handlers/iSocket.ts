import { Handshake, Socket } from 'socket.io';
import { BasicClientInfo } from '../client/client';

export interface CustomHandshake extends Handshake {
  query: ClientJoinRequest
}
export interface ChatSocket extends Socket {
  handshake: CustomHandshake;
}

export interface ClientJoinRequest {
  theme: string;
  party: string;
  name:string
}

export interface FormattedMessageResponse {
  sender: BasicClientInfo;
  body: any;
  uniqueMessageId: string,
  msg_type: number
}

export interface FormattedMatchResponse {
  participants:{id:string,name:string}[]
}

export interface FormattedWelcomeMessage {
  id: string,
  body: string,
  msg_type: number
}
