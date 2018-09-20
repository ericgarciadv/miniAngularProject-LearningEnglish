import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PanelComponent } from './panel/panel.component';
import { AttemptComponent } from './attempt/attempt.component';
import { ProgressComponent } from './progress/progress.component'


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PanelComponent,
    AttemptComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
