import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

interface Favorites {
  label: string;
  image: string;
  url: string;
}

// const showingDetails: boolean = false;

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

  public showingDetails: boolean = false;

showDetails = function (i): void{
  console.log(i);
  this.showingDetails[i] = true
}

  
  

  constructor(public RecipeAPI: RecipesService) { }

  ngOnInit(): void{

  }

  

}
