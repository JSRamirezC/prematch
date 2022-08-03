import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/app/class/category.dto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnDestroy, AfterViewInit, OnInit{

  categories :Array<CategoryDto> = []; 


  constructor(private _router: Router) {

  }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      let categoryDto:CategoryDto= new CategoryDto();
      categoryDto.description="definition"+i;
      categoryDto.id=i+"";
      this.categories.push(categoryDto);
    }
  }
  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
   
  }

  irALogin() {
    this._router.navigate(['/login']) 
  }

}
