import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPanelComponent,
    RightPanelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
