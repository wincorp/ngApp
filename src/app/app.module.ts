import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponentComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
