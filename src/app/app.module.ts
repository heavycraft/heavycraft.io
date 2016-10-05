import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';

import { HeavyCraftService } from './heavy-craft.service';
import { NextPageDirective } from './shared/next-page.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    NextPageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HeavyCraftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
