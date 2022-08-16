import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EventoDetailDto } from 'src/app/class/eventoDetail.dto';
import { ResultService } from 'src/app/services/results/result.service';
import { NgbDateStringAdapter } from '../../utilitarios/ngb-date-string.adapter';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [NgbDateStringAdapter]
})
export class ResultComponent implements OnInit {

  resultados: Array<EventoDetailDto> = [];
  categoryId;
  dateDay = new Date();
  dateString = '';
  fechaNacimiento: NgbDateStruct = null;
  constructor(private route: ActivatedRoute,private _router: Router, private _resultService: ResultService, private dateAdapter: NgbDateStringAdapter,) {
    this.route.params.subscribe(res => this.categoryId = (res.categoryId));
  }

  ngOnInit(): void {

    this.dateString =this.getStringDate (  this.dateDay.getDate() , this.dateDay.getMonth() ,this.dateDay.getFullYear())
    console.log(this.dateString)
    this._resultService.getPaso4(this.categoryId, this.dateString).toPromise()
      .then((object) => {
        this.resultados = object;
        this.resultados.forEach(function (value) {
          let dateString = value.startTime.replace(':00Z[UTC]', '');
          value.startTimeD = new Date(dateString);
        });
      });
  }

  onChangeFechaNacimiento($event?) {
    this.dateString = "";
    let fechaNacAux = this.dateAdapter.toModel(this.fechaNacimiento);

    this.dateString = this.getStringDate(this.fechaNacimiento.day,  this.fechaNacimiento.month , this.fechaNacimiento.year)
    this._resultService.getPaso4(this.categoryId, this.dateString).toPromise()
    .then((object) => {
      this.resultados = object;
      this.resultados.forEach(function (value) {
        let dateString = value.startTime.replace(':00Z[UTC]', '');
        value.startTimeD = new Date(dateString);
      });
    });
  }

  getStringDate(d, m, y) {
    let day: string;
    let month: string;
    let year: string;

    if (d < 10) {
      day = '0' + d;
    }else{
      day = '' + d;
    }

    if (m < 10) {
      month = '0' + m;
    }else{
      month = '' + m;
    }
    year=y+'';
    return year+month+day;
  }

  detalle(number){ 
    this._router.navigate(['MenuResult/resdetalle/'+(number.id+'')]);
  }


}
