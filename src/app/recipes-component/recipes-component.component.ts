import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

interface Favorites {
  label: string;
  image: string;
  url: string;
}


@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.css']
})
export class RecipesComponentComponent implements OnInit {

  
addFavorite = function (favorites: Favorites): void {
    this.RecipeAPI.favorites.push({ label: favorites.label, image: favorites.image, url: favorites.url });
    console.log(this.RecipeAPI.favorites);
  }

  
  

  constructor(public RecipeAPI: RecipesService) { }

  ngOnInit(): void{

  }

  

}
