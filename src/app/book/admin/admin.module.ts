import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule, MdInputModule, MdSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

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
    MdInputModule,
    FormsModule,
    MdSelectModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    BookComponent,
    AuthorComponent,
    AdminComponent
  ]
})
export class AdminModule { }
