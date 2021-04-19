import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from "../recipes.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
//@Output() recipeWasSelected =new EventEmitter<Recipe>();
recipes : Recipe[];
//  recipes : Recipe[] =[
//    new Recipe('A Test Recipe','This is simply a test',
//    'https://www.biggerbolderbaking.com/wp-content/uploads/2018/07/3-Ingredient-bread1.jpg'),
//    new Recipe('Another Test Recipe','This is simply a test',
//    'https://www.biggerbolderbaking.com/wp-content/uploads/2018/07/3-Ingredient-bread1.jpg'),
//  ];
  constructor(private recipesService : RecipesService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.recipesService.getRecipes();
  }
  // onRecipeSelected(recipe : Recipe)
  // {
  //   this.recipeWasSelected.emit(recipe);

  // }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
