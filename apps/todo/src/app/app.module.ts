import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from '../todo/todo/todo.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,TodoComponent],
  imports: [BrowserModule, GraphQLModule,  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
