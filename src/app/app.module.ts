import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './about/service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { MapComponent } from './map/map.component';
import { SocialComponent } from './social/social.component';
import { ConfirmationComponent } from './contact/confirmation/confirmation.component';

// Directives
import { NextPageDirective } from './shared/next-page.directive';

// Services
import { HeavyCraftService } from './heavy-craft.service';
import { MailService } from './mail.service';
import { WindowRef } from './window.service';

import { environment } from '../environments/environment';

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
    MapComponent,
    SocialComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsKey
    }),
    NgbModule
  ],
  providers: [HeavyCraftService, MailService, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
