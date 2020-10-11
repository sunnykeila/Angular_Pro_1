import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Recipe} from '../recipe.modal';
import {DataStorageService} from '../../shared/data-storage.service';
import {RecipeService} from '../recipe.service';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements  Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService,
              private recipesService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
     const recipes = this.recipesService.getRecipes();

     if(recipes.length === 0) {
    return this.dataStorageService.fetchRecipes();
  } else {
     return recipes;

     }
  }


}
