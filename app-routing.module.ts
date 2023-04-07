import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrabExportsComponent } from './crab-exports/crab-exports.component';
import { FishwaterfishesComponent } from './fishwaterfishes/fishwaterfishes.component';
import { HomeComponent } from './home/home.component';
import { OtherSeaFoodExportsComponent } from './other-sea-food-exports/other-sea-food-exports.component';
import { PrawnsComponent } from './prawns/prawns.component';
import { SeawaterFishesComponent } from './seawater-fishes/seawater-fishes.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'SeawaterFishes',component:SeawaterFishesComponent},
  {path:'fishwaterfishes',component:FishwaterfishesComponent},
  {path:'crabexports',component:CrabExportsComponent},
  {path:'prawns',component:PrawnsComponent},
  {path:'OtherSeafood',component:OtherSeaFoodExportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
