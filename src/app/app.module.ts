import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchFormComponent } from './dictionary/components/search-form/search-form.component';
import { SearchResponseComponent } from './dictionary/components/search-response/search-response.component';
import { DictionaryHomeComponent } from './dictionary/pages/home/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryHomeComponent,
    SearchFormComponent,
    SearchResponseComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
