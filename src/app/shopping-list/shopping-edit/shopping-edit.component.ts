import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild ('nameInput',{static : true}) nameInputRef : ElementRef;
@ViewChild ('amountInput',{static : true}) amountInputRef : ElementRef;
//@Output() ingredients =new EventEmitter<Ingredient>();
  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
  }
onAddItem()
{
  const ingName=this.nameInputRef.nativeElement.value;
  const ingAmount=this.amountInputRef.nativeElement.value;
  const ingredient=new Ingredient(ingName,ingAmount);
  //this.ingredients.emit(ingredient);
  this.slService.addIngredient(ingredient);
}
}
