import { Recipe } from "./recipe.model";
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService{
    //recipeSelected=new Subject<Recipe>();
    private recipes : Recipe[] =[
        new Recipe('A Test Recipe','This is simply a test',
        'https://www.biggerbolderbaking.com/wp-content/uploads/2018/07/3-Ingredient-bread1.jpg',
        [
            new Ingredient('Wheat-floor',1),
            new Ingredient('French fries',20)
        ]),
        new Recipe('Another Test Recipe','This is simply a test',
        'https://www.biggerbolderbaking.com/wp-content/uploads/2018/07/3-Ingredient-bread1.jpg',
        [
            new Ingredient('Bun',2),
            new Ingredient('Meat',20)
        ]),
      ];
      constructor(private slService : ShoppingListService){
      }

      getRecipes()
      {
          return this.recipes.slice();
      }
    addIngredientsToShoppingList( ingredients : Ingredient[]){
       this.slService.addIngredients(ingredients);
    }
    getRecipeById(id : number)
    {
       return this.recipes.slice()[id];
    }
}