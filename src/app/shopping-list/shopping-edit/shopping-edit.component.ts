import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  //declare varible for input referenc, so that click onAddItem() is worked
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') nameAmountReference: ElementRef;

  //Emit a new event so, now pass this reference data to the parent- shopping-list component
  //ingredientShoppingAdded = new EventEmitter<name: string, amount: string>();
  @Output() ingredientItemAdded = new EventEmitter<Ingredient>();


  onAddItem() {

    const ingredientName = this.nameInputReference.nativeElement.value;
    console.log(ingredientName);
    const ingredientAmount = this.nameAmountReference.nativeElement.value;
    console.log(ingredientAmount);


    //when added new item ingredient then it will added on newIngredient
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    //emit my own created ingredient item, then it will pass the data
    this.ingredientItemAdded.emit(newIngredient);


  }

}
