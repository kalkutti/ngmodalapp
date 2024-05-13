import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { EditListingPageComponent } from './app/components/edit-listing-page/edit-listing-page.component';
import { NewListingPageComponent } from './app/components/new-listing-page/new-listing-page.component';
import { MyListingsPageComponent } from './app/components/my-listings-page/my-listings-page.component';
import { StatusPageComponent } from './app/components/status-page/status-page.component';
import { ListingDetailPageComponent } from './app/components/listing-detail-page/listing-detail-page.component';
import { ListingsPageComponent } from './app/components/listings-page/listings-page.component';
import { AboutComponent } from './app/components/about/about.component';
import { TasksComponent } from './app/components/tasks/tasks.component';
import { withDebugTracing, provideRouter, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailPageComponent },
  { path: 'listings/status/:id', component: StatusPageComponent },
  { path: 'my-listings', component: MyListingsPageComponent },
  { path: 'new-listing/:id', component: NewListingPageComponent },
  { path: 'edit-listing', component: EditListingPageComponent },
];



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, NgbModule, FontAwesomeModule, FormsModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(appRoutes, withDebugTracing()),
    ]
})
  .catch(err => console.error(err));
