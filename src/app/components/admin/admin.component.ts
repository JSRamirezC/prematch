import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/app/class/category.dto';
import { Category2Dto } from 'src/app/class/category2.dto';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  paso1="";
  paso2="";
  paso3="";
  paso4="";
  title1="";
  title2="";
  title3="";

  categories :Array<CategoryDto> = []; 
  categories2 :Array<Category2Dto> = []; 
  categories3 :Array<Category2Dto> = []; 

  constructor(private _router: Router, private _categoriesService: CategoriesService) {

  }

  ngOnInit(): void {
   
      this._categoriesService.getPaso1().toPromise()        
      .then((objects) => {
        this.categories=objects;
      });

  }

  changePaso1(number){
    this.categories2 = []; 
    this.paso1=number.id+"";
    this.paso2="";
    this.paso3="";
    this.title1=number.description+"";
    this.title2="";
    this.title3="";
    this._categoriesService.getPaso2(this.paso1).toPromise()        
    .then((objects) => {
      this.categories2=objects;
    });
  }

  changePaso2(number){
    this.categories3 = []; 
    this.paso2=number.id+"";
    this.paso3="";
    this.title2=number.description+"";
    this.title3="";
    this._categoriesService.getPaso3(this.paso1,this.paso2).toPromise()        
    .then((objects) => {
      this.categories3=objects;
    });

  }

  changePaso3(number){ 
    this.title3=number.description+"";
    this._router.navigate(['Admin/listEventsEdit/'+(number.id+'')]);
  }

  newCategory(){ 
    this._router.navigate(['Admin/newCategory/'+(+'')]);
  }

}
