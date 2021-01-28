import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecipesComponentComponent } from './recipes-component/recipes-component.component';

const routes: Routes = [
  {path: "favorites", component: FavoritesComponent},
  {path: "**", component: RecipesComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
