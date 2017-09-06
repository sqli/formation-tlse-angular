import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule } from '@angular/material';

import { BookComponent } from './book.component';
import { AuthorComponent } from './author.component';
import { AdminComponent } from './admin.component';




const adminRoutes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: 'book',
        component: BookComponent
      },
      {
        path: 'author',
        component: AuthorComponent
      }
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    BookComponent,
    AuthorComponent,
    AdminComponent
  ]
})
export class AdminModule { }
