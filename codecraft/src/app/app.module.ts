import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginButtonComponent } from './header/login-button/login-button.component';
import { MyDirective } from './my.directive';
import { MyPipe } from './my.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginButtonComponent,
    MyDirective,
    MyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
