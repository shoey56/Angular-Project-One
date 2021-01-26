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

  getFilteredResults(): void {
   this.RecipeAPI.getRecipes(this.foodSearch);
  }

  constructor(public RecipeAPI: RecipesService) { }

  ngOnInit(): void {
  }

}
