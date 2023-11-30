import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/Layouts/home/home.component';
import { Error404Component } from './home/views/error404/error404.component';
import { SigninComponent } from './home/views/signin/signin.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Error404Component, SigninComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
