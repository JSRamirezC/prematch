import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrls: ['./home-principal.component.scss']
})
export class HomePrincipalComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
  }

  eventos(){ 
    this._router.navigate(['Menu']);
  }

  resultados(){ 
    this._router.navigate(['MenuResult']);
  }


}
