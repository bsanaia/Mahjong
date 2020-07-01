import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CardComponent } from './card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {cardReducer} from './wrapper/store/card.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({card: cardReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
