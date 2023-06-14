import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChatService } from '../../chat.service';
import { ChatRComponent } from '../chat-r/chat-r.component';
import { ChatComponent } from '../chat/chat.component'


@Component({
  selector: 'app-root',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(private chat: ChatService) {}
  room = "room"

  ngOnInit() {
    
    this.chat.messages.subscribe(msg => {
      const a = this.container.createComponent(ChatComponent);
      a.instance.message = msg;
      a.instance.date="15april"
    });
  }

    
    
  
  selectedPerson: any;
  cls = "entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4";
  peopleList: any[] = [
    { name: 'lahbib', date: '12 april', notification: 23, message: 'sahhaa', active: this.cls },
    { name: 'mahdi', date: '12 april', notification: 85, message: 'cv' ,active: this.cls},
    { name: 'omaima', date: '12 mars', notification: 2, message: 'cc' ,active: this.cls}
  ];
  removeActive(person : any){
    if(person.name!=this.room){
      this.container.clear();
    }
    this.room=person.name
    this.chat.joinRoom(this.room)
    for (let people of this.peopleList){
      if(people.name==person.name)
      people.active="border-red-500 "+people.active
      else if(people.active.includes("border-red-500 ")){
        people.active=people.active.slice(15);
        
      }

    }
    
  }
  search(name: string | undefined) {
    for (let people of this.peopleList){
      if(!people.name.includes(name))
      people.active+=" hidden"
      if((name===""||people.name.includes(name)) && (people.active.includes(" hidden"))){
        people.active=people.active.slice(0, -7);
        console.log(people.active)
      }
      

    }
  }


  updateValue(){
    const input = document.getElementById('search') as HTMLInputElement | null;
    const value = input?.value;
    this.search(value);
  }
  sendMessage() {
    const a = this.container.createComponent(ChatRComponent);
    const input = document.getElementById('msg') as HTMLInputElement | null;
    const value = input?.value || ''; // Assign a default value if input?.value is undefined
    a.instance.message = value;
    a.instance.date="15april"
    this.chat.sendMsg({ value: value, room: this.room });

  }
  
}
export default InterfaceComponent