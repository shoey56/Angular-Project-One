import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    public foodSearch:string = "";
    public foodServing: number = 0;
    public lowCarb: boolean = true;
    public vegetarian: boolean = true;
    public peanutFree: boolean = true;

  getFilteredResults(): void {
    const diet: string [] = [];
    if (this.lowCarb) {
      diet.push('low-carb')
    } 
    if (this.vegetarian) {
      diet.push('vegetarian')
    } 
    if (this.peanutFree) {
      diet.push('peanutFree')
    } 
   this.RecipeAPI.getRecipes(this.foodSearch, diet);
  }

  constructor(public RecipeAPI: RecipesService) { }

  ngOnInit(): void {
  }

}
