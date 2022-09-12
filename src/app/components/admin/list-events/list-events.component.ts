import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoDto } from 'src/app/class/evento.dto';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  eventos :Array<EventoDto> = []; 
  categoryId;


  constructor(private route: ActivatedRoute,private _router: Router, private _categoriesService: CategoriesService) {
    this.route.params.subscribe(res => this.categoryId = (res.categoryId));
   }

  ngOnInit(): void {
    this._categoriesService.getPaso4(this.categoryId).toPromise()        
    .then((objects) => {
      this.eventos=objects;
    });

  }

  detalle(number){ 
    this._router.navigate(['Admin/eventsEdit/'+(number.id+'')]);
  }

  newEvento(){ 
    this._router.navigate(['Admin/newEvents/'+('0')]);
  }

}
