import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@NgModule({
  // ...
  imports: [
    // ...
    ToastModule.forRoot()
  ],
  // ...
})

export class AppModule { }
