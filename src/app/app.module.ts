import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatRComponent } from './components/chat-r/chat-r.component';
import { SendComponent } from './components/send/send.component';
import { TextComponent } from './components/text/text.component';
import { SearchComponent } from './components/search/search.component';
import { StatusComponent } from './components/status/status.component';
import { ChatTextComponent } from './components/chat-text/chat-text.component';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
import { InterfaceComponent } from './components/interface/interface.component';
import { LoginComponent } from './components/login/login.component';
import { InterfaceAdminComponent } from './components/interface-admin/interface-admin.component';
import { InterfaceUserComponent } from './components/interface-user/interface-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ChatComponent,
    ChatRComponent,
    SendComponent,
    TextComponent,
    SearchComponent,
    StatusComponent,
    ChatTextComponent,
    InterfaceComponent,
    LoginComponent,
    InterfaceAdminComponent,
    InterfaceUserComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
