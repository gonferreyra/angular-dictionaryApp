import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DictionaryHomeComponent } from './dictionary/pages/dictionary-home/dictionary-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './dictionary/components/search-box/search-box.component';

@NgModule({
  declarations: [AppComponent, DictionaryHomeComponent, SearchBoxComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
