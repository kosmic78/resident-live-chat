import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  username: string = '';
  message: string = '';
  messages: any = [];
  isUserNameSet: boolean = false;

  constructor(){
   
  }
  
  sendMessage(){
    console.log(this.message);
    this.messages.push(this.message);
    this.message = '';
  }

  createUser(){
    console.log(this.username);
    this.isUserNameSet = true;
  }
}
