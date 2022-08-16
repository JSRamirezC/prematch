import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoDetailDto } from 'src/app/class/eventoDetail.dto';
import { ResultService } from 'src/app/services/results/result.service';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss']
})
export class ResultDetailComponent implements OnInit {

  eventosDetail :EventoDetailDto; 
  detalleId;

  constructor(private route: ActivatedRoute,private _resultService: ResultService) {
    this.route.params.subscribe(res => this.detalleId = (res.detalleId));
   }

  ngOnInit(): void {
    this._resultService.getPaso5(this.detalleId).toPromise()
    .then((object) => {
      this.eventosDetail = object;
      this.eventosDetail.markets[0].selections[0].result='Winner';
    });
  }

}
