import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoDto } from 'src/app/class/evento.dto';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  eventos :Array<EventoDto> = []; 
  categoryId;


  constructor(private route: ActivatedRoute, private _categoriesService: CategoriesService) {
    this.route.params.subscribe(res => this.categoryId = (res.categoryId));
   }

  ngOnInit(): void {
    this._categoriesService.getPaso4(this.categoryId).toPromise()        
    .then((objects) => {
      this.eventos=objects;
    });

  }

}
