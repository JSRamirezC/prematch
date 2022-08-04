import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/app/class/category.dto';
import { Category2Dto } from 'src/app/class/category2.dto';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnInit{

  
  paso1="";
  paso2="";
  paso3="";
  paso4="";
  title1="";
  title2="";
  title3="";
  title4="";
  title="";

  categories :Array<CategoryDto> = []; 
  categories2 :Array<Category2Dto> = []; 
  categories3 :Array<Category2Dto> = []; 

  constructor(private _router: Router, private _categoriesService: CategoriesService) {

  }

  ngOnInit(): void {
   
      let categoryDto:CategoryDto= new CategoryDto();
      categoryDto.description="SPORT";
      categoryDto.id=1+"";
      this.categories.push(categoryDto);
   
      let categoryDto2:CategoryDto= new CategoryDto();
      categoryDto2.description="LEAGUE";
      categoryDto2.id=2+"";
      this.categories.push(categoryDto2);

      let categoryDto3:CategoryDto= new CategoryDto();
      categoryDto3.description="TOURNAMENT";
      categoryDto3.id=3+"";
      this.categories.push(categoryDto3);

      let categoryDto4:CategoryDto= new CategoryDto();
      categoryDto4.description="SEASON";
      categoryDto4.id=4+"";
      this.categories.push(categoryDto4);

  }

  changePaso1(number){

    this.categories2 = []; 
    this.paso1=number+"";
    let categoryDto:CategoryDto= new CategoryDto();
    categoryDto.description="SPORT";
    categoryDto.id=1+"";
    for (let i = 0; i < 5; i++) {
      let category2Dto:Category2Dto= new Category2Dto();
      category2Dto.description="League-"+(i+1);
      category2Dto.id=i+"";
      category2Dto.type=categoryDto;
      this.categories2.push(category2Dto);
    }
    console.log(this.paso1);
  }

  changePaso2(number){
    this.categories3 = []; 
    this.paso2=number+"";
    let categoryDto:CategoryDto= new CategoryDto();
    categoryDto.description="SPORT";
    categoryDto.id=1+"";
    for (let i = 0; i < 3; i++) {
      let category2Dto:Category2Dto= new Category2Dto();
      category2Dto.description="Tournament-"+(i+1);
      category2Dto.id=i+"";
      category2Dto.type=categoryDto;
      this.categories3.push(category2Dto);
    }
    console.log(this.paso1);
  }

  changePaso3(number){ 

  }

  irALogin() {
    this._router.navigate(['/login']) 
  }

}
