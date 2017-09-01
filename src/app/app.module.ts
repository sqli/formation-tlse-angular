import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import { MdListModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './book/book.component';
import { UppercaseDirective } from './shared/uppercase.directive';
import { BookListComponent } from './book/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    UppercaseDirective,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdListModule,
    MdToolbarModule,
    MdCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
