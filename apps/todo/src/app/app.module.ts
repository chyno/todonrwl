import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from '../todo/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent,TodoComponent],
  imports: [BrowserModule,   HttpClientModule, GraphQLModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
