import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ButtonComponent } from './shared/button/button.component';
import { InputsModule } from '@progress/kendo-angular-inputs';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabelModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
