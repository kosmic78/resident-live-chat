import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  username: string = '';
  isUserNameSet: boolean = false;

  constructor(){
   
  }
  
  sendMessage(){
    console.log("Message sent");
  }

  createUser(){
    console.log(this.username);
    this.isUserNameSet = true;
  }
}
