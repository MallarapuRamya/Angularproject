import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public name : string;
    public description :string;
    public imagePath : String;
    public ingredients : Ingredient[];

    constructor(name : string, description :string,imagePath : String, ingredients : Ingredient[])
    {
       this.name=name;
       this.description=description;
       this.imagePath=imagePath;
       this.ingredients=ingredients;
    }
}