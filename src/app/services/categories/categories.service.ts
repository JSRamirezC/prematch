import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { map, catchError } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

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

  getPaso4 (catalogo) {
    //quitar mock 
    catalogo="357"
    //fin mock 
    return this.httpClient
      .get(
        'https://event-module.dev.crux-games.com/event-module/internal/events?categoryId='+catalogo+'&provider=BETRADAR'
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
