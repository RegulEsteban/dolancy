import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/tienda', pathMatch: 'full' },
  { path: 'tienda', component: DashboardComponent, data: { animation: 'tienda' } },
  { path: 'galeria', component: GalleryComponent, data: { animation: 'galeria' } },
  { path: 'producto/:id', component: ShoeDetailComponent, data: { animation: 'producto' } },
  { path: 'nosotros', component: AboutComponent, data: { animation: 'nosotros' } },
  { path: 'contactanos', component: ContactComponent, data: { animation: 'contactanos' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }