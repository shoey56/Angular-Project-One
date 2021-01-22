import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesComponentComponent } from './recipes-component/recipes-component.component';
import { FilterComponent } from './filter/filter.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponentComponent,
    FilterComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
