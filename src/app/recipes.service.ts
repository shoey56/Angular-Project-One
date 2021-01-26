// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipesService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiKey = "886531a98f5d4546a459c136bb84dbdf";
  appId = "3096e7e1";
  url = "https://api.edamam.com/search";
  recipes: any[];
  constructor(private http: HttpClient) {}

  getRecipes(search) {
    const requestUrl =
      this.getUrlWithAPIKey() + "&q=" + search; // add whatever params you want from here: https://developers.themoviedb.org/3/discover/movie-discover

    this.http.get(requestUrl).subscribe(
      (response: any) => {
        this.recipes = response.hits;

      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() {
    return `${this.url}?app_id=${this.appId}&app_key=${this.apiKey}`;
  }
}
