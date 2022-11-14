import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';


const routes: Routes = [  /*estas palabras son las que se leen en el path, y llevan al componenete indicado*/
  {path:'',component:HomeComponent}, 
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'heroes/:nombre',component:HeroesComponent},
  {path:'heroe/:id',component:HeroeComponent}, /*id para que vaya al detalle en concreto (mirar path) tmbien ponerlo en el router link los dos puntos indican que detras hay un parametro*/
  {path:'**',component:HomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


