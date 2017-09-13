import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule, MdInputModule, MdSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookComponent } from './book.component';
import { AuthorComponent } from './author.component';
import { AdminComponent } from './admin.component';

import { AuthorService } from '../author.service';

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
    ReactiveFormsModule,
    MdSelectModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    BookComponent,
    AuthorComponent,
    AdminComponent
  ],
  providers: [AuthorService]
})
export class AdminModule { }
