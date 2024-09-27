import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { ContactFormComponent } from './MyComponents/contact-form/contact-form.component';
import { MainfooterComponent } from "./MyComponents/mainfooter/mainfooter.component";
import { TestimonialComponent } from "./MyComponents/testimonial/testimonial.component";
import { WorksComponent } from "./MyComponents/works/works.component";
import { FeaturesComponent } from "./MyComponents/features/features.component";
import { AboutComponent } from "./MyComponents/about/about.component";
import { ServicesComponent } from "./MyComponents/services/services.component";
import { HeroComponent } from "./MyComponents/hero/hero.component"; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainfooterComponent,
    TestimonialComponent,
    WorksComponent,
    FeaturesComponent,
    AboutComponent,
    ServicesComponent,
    HeroComponent,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
