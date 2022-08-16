import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { map, catchError } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private httpClient: HttpClientService) { }

  getPaso1 () {
    return this.httpClient
      .get(
        'https://event-module.dev.crux-games.com/event-module/internal/categories/types'
      )
      .pipe(map((response: HttpResponse<any>) => {
        if (response.status == 200) {
          return response.body;
        } else if (response.status == 206) {
          return [];
        } else {

          return [];
        }
      }));
  }

  getPaso2 (type) {
    return this.httpClient
      .get(
        'https://event-module.dev.crux-games.com/event-module/internal/categories?provider=BETRADAR&typeId='+type
      )
      .pipe(map((response: HttpResponse<any>) => {
        if (response.status == 200) {
          return response.body;
        } else if (response.status == 206) {
          return [];
        } else {

          return [];
        }
      }));
  }

  getPaso3 (type,parent) {
    //quitar mock 
    type = "2"
    parent="685"
    //fin mock 
    return this.httpClient
      .get(
        'https://event-module.dev.crux-games.com/event-module/internal/categories?provider=BETRADAR&parentId='+parent+'&typeId='+type
      )
      .pipe(map((response: HttpResponse<any>) => {
        if (response.status == 200) {
          return response.body;
        } else if (response.status == 206) {
          return [];
        } else {

          return [];
        }
      }));
  }

  getPaso4 (categoryID,date) {
    //quitar mock 
    categoryID = "1587"
    date="20220730"
    //fin mock 
    return this.httpClient
      .get(
        'http://event-module.dev.crux-games.com/event-module/internal/events/result?categoryId='+categoryID+'&date='+date
      )
      .pipe(map((response: HttpResponse<any>) => {
        if (response.status == 200) {
          return response.body;
        } else if (response.status == 206) {
          return [];
        } else {

          return [];
        }
      }));
  }

  getPaso5 (evento) {
    //quitar mock 
    evento="2835"
    //fin mock 
    return this.httpClient
      .get(
        'https://event-module.dev.crux-games.com/event-module/internal/events/'+evento
      )
      .pipe(map((response: HttpResponse<any>) => {
        if (response.status == 200) {
          return response.body;
        } else if (response.status == 206) {
          return [];
        } else {

          return [];
        }
      }));
  }
}
