import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MdListModule, MdToolbarModule, MdCardModule, MdIconModule } from '@angular/material';

import { BookComponent } from './book.component';
import { UppercaseDirective } from '../shared/uppercase.directive';
import { BookListComponent } from './book-list.component';
import { DevantureComponent } from './devanture.component';


const bookRoutes: Routes = [
  {
    path: 'book', component: DevantureComponent,
    children: [
      {
        path: ':id',
        component: BookComponent
      },
      {
        path: '',
        component: BookListComponent
      }
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdListModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule,
    RouterModule.forChild(bookRoutes)
  ],
  declarations: [
    BookComponent,
    UppercaseDirective,
    BookListComponent,
    DevantureComponent
  ]
})
export class BookModule { }
