import {
  ChatSocket,
  FormattedMatchResponse,
  FormattedWelcomeMessage
} from '../socket-handlers/iSocket';

import { SYSTEM_MESSAGES } from '../constants';

export interface BasicClientInfo {
  id: string;
  name: string;
}

export class ChatClient {
  private info: BasicClientInfo;
  private socket: ChatSocket;

  constructor(socket: ChatSocket) {
    this.socket = socket;
    this.info = { id: socket.id, name: socket.handshake.query.name };
  }

  get name() {
    return this.info.name;
  }

  get id() {
    return this.info.id;
  }

  get requestedTheme() {
    return this.socket.handshake.query.theme;
  }

  get requestedParty() {
    return this.socket.handshake.query.party;
  }

  get chatSocket() {
    return this.socket;
  }

  disconnect() {
    return this.socket.disconnect();
  }

  leaveAll() {
    return this.socket.leaveAll();
  }

  joinRoom(room: string) {
    this.socket.join(room);
  }

  welcomeMessage(otherMembers: ChatClient[]): void {
    // if clients array === 1 - SEND REGULAR WELCOME MESSAGE FOR 1:1 ELSE
    // const response: FormattedMatchResponse = {
    //   participants: otherMembers.map(member => ({
    //     id: member.id,
    //     name: member.name,
    //   })),
    // };

    // 1:1 otherMembers > 1 then we should display other message
    const response: FormattedWelcomeMessage = {
      id: otherMembers[0].id,
      body: SYSTEM_MESSAGES.welcome,
      msg_type: 0,
      sender_name: otherMembers[0].name
    }


    this.chatSocket.emit('match', response);
  }
}
