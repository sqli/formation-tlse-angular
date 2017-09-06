import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MdToolbarModule, MdIconModule } from '@angular/material';

import { BookModule } from './book/book.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimingInterceptorService } from './shared/timing-interceptor.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdToolbarModule,
    MdIconModule,
    BookModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TimingInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
