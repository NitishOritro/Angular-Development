import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipesObject: Recipe[] = [new Recipe('1st Test Recipe', 'This is a 1st Test Recipe',
  'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg'),
  new Recipe('2nd Test Recipe', 'This is a 2nd Test Recipe',
  'https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg'),
  new Recipe('3rd Test Recipe', 'This is a 3rd Test Recipe',
  'https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg')];

  constructor() {
    console.log("This is sample "+JSON.stringify(this.recipesObject));
  }


  onRecipeSelected(recipesObject: Recipe) {

    console.log(this.recipesObject); // all recipies object print
    console.log(this.recipesObject[0]); // single recipe object print
    this.recipeWasSelected.emit(recipesObject);
  }

}
