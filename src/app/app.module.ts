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

// Directives
import { NextPageDirective } from './shared/next-page.directive';

// Services
import { HeavyCraftService } from './heavy-craft.service';
import { MailService } from './mail.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    NextPageDirective,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [HeavyCraftService, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
