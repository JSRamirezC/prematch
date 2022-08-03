import { Component, OnInit } from '@angular/core';
import { EventoDto } from 'src/app/class/evento.dto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  eventos :Array<EventoDto> = []; 

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      let eventoDto:EventoDto= new EventoDto();
      eventoDto.away="away"+i;
      eventoDto.home="home"+i;
      eventoDto.fecha="26-06-2015 12:00AM"
      this.eventos.push(eventoDto);
    }

  }

}
