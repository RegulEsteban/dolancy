import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { ScrollPointDirective } from './scroll-point.directive';
import {ListFilterPipe} from './gallery/gallery-filter.pipe';
import {FormsModule} from '@angular/forms';
import {Globals} from './globals';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DashboardComponent,
    ShoeDetailComponent,
    AboutComponent,
    ContactComponent,
    ScrollPointDirective,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    Title, Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
