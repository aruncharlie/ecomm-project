import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TouristguideComponent } from './touristguide/touristguide.component';
import { HotelsComponent } from './hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TouristguideComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
