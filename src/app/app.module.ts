import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ViewSpeechComponent } from './view-speech/view-speech.component';
import { AddSpeechComponent } from './add-speech/add-speech.component';
import { SearchSpeechComponent } from './search-speech/search-speech.component';

import { SharedModule } from './shared/shared.module';

import { DataService } from '../helpers/data.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    ViewSpeechComponent,
    AddSpeechComponent,
    SearchSpeechComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AngularFontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
