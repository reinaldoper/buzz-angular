import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarregandoComponent } from './page/carregando/carregando.component';
import { HomeComponent } from './page/home/home.component';
import { ResultComponent } from './page/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CarregandoComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
