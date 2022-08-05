import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoDetailDto } from 'src/app/class/eventoDetail.dto';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  eventosDetail :EventoDetailDto; 
  detalleId;

  constructor(private route: ActivatedRoute,private _categoriesService: CategoriesService) {
    this.route.params.subscribe(res => this.detalleId = (res.detalleId));

   }

  ngOnInit(): void {
    this._categoriesService.getPaso5(this.detalleId).toPromise()        
    .then((object) => {
      this.eventosDetail=object;
      console.log(this.eventosDetail);
    });

  }

}
