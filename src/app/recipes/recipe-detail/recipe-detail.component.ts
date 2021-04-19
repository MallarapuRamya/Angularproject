import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from "../recipes.service";
import { ActivatedRoute, Params , Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe:Recipe;
recipeId : number;
  constructor(private recipeService : RecipesService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    //this.recipeId=+this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (param : Params)=>
      {
        this.recipeId=+param['id'];
      });
      this.recipe=this.recipeService.getRecipeById(this.recipeId);
  }
  onAddToShoppingList()
  {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo : this.route})
  }

}