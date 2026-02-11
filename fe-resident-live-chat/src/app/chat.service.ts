import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket){}

  sendMessage(msg: string, username: string) {
    this.socket.emit('message', [msg, username]); // emmits the 'message' event to the socket and sends the data
  }
  
  getMessage() { // after the server receives the message, it broadcasts it and here the data broadcasted is retrieved for this connection
    return this.socket.fromEvent('received').pipe(map((data)=>data)); 
  }
}
