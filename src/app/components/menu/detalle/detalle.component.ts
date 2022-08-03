import { Component, OnInit } from '@angular/core';
import { EventoDetailDto } from 'src/app/class/eventoDetail.dto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  eventosDetail :Array<EventoDetailDto> = []; 

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      let eventoDto:EventoDetailDto= new EventoDetailDto();
      eventoDto.definition="definition"+i;
      eventoDto.win1="win1-"+i;
      eventoDto.tie="tie-"+i
      eventoDto.win2="win2-"+i;
      this.eventosDetail.push(eventoDto);
    }

  }

}
