import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CodemirrorModule } from 'ng2-codemirror';

import { AppComponent } from './app.component';
import { CompilerComponent } from './compiler/compiler.component';

@NgModule({
  declarations: [
    AppComponent,
    CompilerComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
