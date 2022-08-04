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
        'http://event-module.dev.crux-games.com/event-module/categories/types'
      )
      .pipe(map((response: HttpResponse<any>) => {
        if (response.status == 200) {
          return response.body.respuesta;
        } else if (response.status == 206) {
          return [];
        } else {

          return [];
        }
      }));
  }

  getDescription (parentId,typeId) {
    return this.httpClient
      .get(
        'http://event-module.dev.crux-games.com/event-module/categories?parentId='+parentId+'&typeId='+typeId
      )
      .pipe(map((response: HttpResponse<any>) => {
        if (response.status == 200) {
          return response.body.respuesta;
        } else if (response.status == 206) {
          return [];
        } else {

          return [];
        }
      }));
  }

}
