import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [new Ingredient('Apples',5), new Ingredient('Tomatoes',10)];

  constructor(){

  }

  onIngredientItemAdded(newingredientItemObject: Ingredient) {

    console.log("before "+JSON.stringify(this.ingredients));

    this.ingredients.push(newingredientItemObject);

    console.log("after "+JSON.stringify(this.ingredients));

  }

}
