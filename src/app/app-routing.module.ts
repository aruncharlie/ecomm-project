import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TouristguideComponent } from './touristguide/touristguide.component';

const routes: Routes = [
{path:'home', component :HomeComponent} ,
{path:'hotels',component:HotelsComponent},
{path:'touristguide',component:TouristguideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
