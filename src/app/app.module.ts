import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './about/service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { MapComponent } from './map/map.component';

// Directives
import { NextPageDirective } from './shared/next-page.directive';

// Services
import { HeavyCraftService } from './heavy-craft.service';
import { MailService } from './mail.service';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    NextPageDirective,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ContactFormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpHoaD-fGylgBp4YaDdDdD641sZIxKHY4'
    })
  ],
  providers: [HeavyCraftService, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
