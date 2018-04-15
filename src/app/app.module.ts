import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// new imported
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
