import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent {
  recipesObject: Recipe[] = [new Recipe('1ST Test Recipe', 'This is a simple test',
  'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg'),
  new Recipe('2nd Test Recipe', 'This is a simple test',
  'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg')];

  constructor() {
    console.log("This is sample "+JSON.stringify(this.recipesObject));
  }


}
