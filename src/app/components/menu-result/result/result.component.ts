import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoDetailDto } from 'src/app/class/eventoDetail.dto';
import { ResultService } from 'src/app/services/results/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultados :Array<EventoDetailDto> = []; 
  categoryId;
  dateDay = new Date();
  dateString = '';

  constructor(private route: ActivatedRoute,private _resultService: ResultService) {
    this.route.params.subscribe(res => this.categoryId = (res.categoryId));
  }

  ngOnInit(): void {
    this.dateString+=(this.dateDay.getFullYear()+'')+(this.dateDay.getMonth())+(this.dateDay.getDate())
    console.log(this.dateString)
    this._resultService.getPaso4(this.categoryId,this.dateString).toPromise()        
    .then((object) => {
      this.resultados=object;
    });
  }

}
