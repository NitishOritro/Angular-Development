import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent {

  @Input() recipeValue: Recipe;

  //emit my event form onSelected()
  @Output() recipeSelected = new EventEmitter<void>() //void - it contans no information


  constructor(){

  }

  onSelected(){
    console.log(this.recipeSelected);
    this.recipeSelected.emit();

  }

}
