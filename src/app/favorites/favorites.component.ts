import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

// interface Favorites {
//   label: string;
//   image: string;
//   url: string;
// }

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  removeFavorite = function (index): void {
    this.RecipeAPI.favorites.splice(index, 1);
    console.log(this.RecipeAPI.favorites);}

  // favorites: Favorites [] = []

  // addFavorite = function (favorites: Favorites): void {
  //   this.favorites.push({ label: this.label, image: this.image, url: this.url });
  //   console.log(favorites);
  // }

  constructor(public RecipeAPI: RecipesService) { }

  ngOnInit(): void {
  }

}
