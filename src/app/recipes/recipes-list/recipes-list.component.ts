import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {


ricetta: Recipe = new Recipe('spaghetti e vongole',
'Gli spaghetti alle vongole sono un piatto napoletano ',

'https://www.salepepe.it/files/2015/07/AA501081_-986x400.jpg');
ingredients = {
  nome : 'vongole',
  peso: '10g'
};

recipes: Recipe[] = [new Recipe('spaghetti e vongole',
'Gli spaghetti alle vongole sono un piatto napoletano ',
'https://www.salepepe.it/files/2015/07/AA501081_-986x400.jpg'),
new Recipe('gnocchi con vongole',
'gnocchi con vongole',
'http://www.italiadiscovery.it/uploads/ricette/2015/04/Copia-3-di-Gnocchi-con-cozze-vongole-e-pomodorini-1024x798.jpg'),
new Recipe('lasagna',
'lasagna ',
'https://amalfinotizie.it/wp-content/uploads/2016/09/lasagna-napoletana.jpg')];




  constructor() { }

  ngOnInit() {
  }

}
