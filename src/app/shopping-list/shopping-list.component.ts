import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients : Ingredient[];
  private igChangeSub : Subscription;
// ingredients : Ingredient[] =[
//   new Ingredient('Apples',5),
//   new Ingredient('Tomatoes',10),
// ];
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredient();
    this.igChangeSub=this.shoppingListService.ingredientsChanged.subscribe((ingredients : Ingredient[])=>
    {
     this.ingredients=ingredients;
    });
  }
  ngOnDestroy()
  {
    this.igChangeSub.unsubscribe();
  }
}
