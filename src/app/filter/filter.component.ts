import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    public foodSearch:string = "";
    public ingredients: number = 10;
    public peanutFree: boolean = false;
    public vegetarian: boolean = false;
    public vegan: boolean = false;

  getFilteredResults(): void {
    const diet: string [] = [];
    if (this.peanutFree) {
      diet.push('peanut-free')
    } 
    if (this.vegetarian) {
      diet.push('vegetarian')
    } 
    if (this.vegan) {
      diet.push('vegan')
    } 
   this.RecipeAPI.getRecipes(this.foodSearch, this.ingredients, diet);
  }

  constructor(public RecipeAPI: RecipesService) { }

  ngOnInit(): void {
  }

}
