import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.css']
})
export class RecipesComponentComponent implements OnInit {

  // public foodSearch:string = "";

  // getFilteredResults(): RecipesService {
  //   // return this.RecipeAPI.filter((todo => {
  //   //   return todo.task.toLowerCase().includes(this.filterString.toLowerCase());
  //   // }));
  // }



  constructor(public RecipeAPI: RecipesService) { }

  ngOnInit(): void{

  }

  

}
