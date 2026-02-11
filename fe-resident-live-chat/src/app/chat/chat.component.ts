import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  username: string = '';
  message: string = '';
  messages: { message: string; username: string }[] = [];
  isUserNameSet: boolean = false;

  constructor(private chatService : ChatService){}

  ngOnInit(): void {
    this.getMessages();
  }
  
  sendMessage(){
    this.messages.push({ message: this.message, username: this.username});
    this.chatService.sendMessage(this.message, this.username);
    this.message = '';
  }

  getMessages() {
    this.chatService.getMessage().subscribe((data: any) => {
      const msg = data.data[0];
      const user = data.data[1];

      this.messages.push({ message: msg, username: user});
    });
  }

  createUser(){
    this.isUserNameSet = true;
  }
}
