import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/Layouts/home/home.component';
import { Error404Component } from './home/views/error404/error404.component';
import { SigninComponent } from './home/views/signin/signin.component';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    SigninComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
