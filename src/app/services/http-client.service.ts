import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class HttpClientService {

  constructor(private httpClient: HttpClient, 
    private notificationsService: NotificationsService
    ) {
  }

  private agregarHeadersGenericos() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    headers =headers.append("Access-Control-Allow-Origin", "*")
    headers =headers.append("Accept", "*/*")

  
    headers =headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers =headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
   
    //if (sessionStorage.getItem('token')) { headers = headers.append('token', sessionStorage.getItem('token')) }
    return { headers: headers, observe: 'response' as 'body' };
  }

  private agregarHeadersArchivos() {
    let headers = new HttpHeaders();    
    if (sessionStorage.getItem('origenToken')) { headers = headers.append('origenToken', sessionStorage.getItem('origenToken') || "[]") }
    if (sessionStorage.getItem('token')) { headers = headers.append('token', sessionStorage.getItem('token') || "[]") }
    return { headers: headers, observe: 'response' as 'body', responseType: 'blob' as 'json' };
  }

  private agregarHeadersInternos() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
  
    return { headers: headers, observe: 'response' as 'body' };
  }

  get(url: string) {
    return this.httpClient.get(url, this.agregarHeadersGenericos())
      .pipe(catchError(err => {
        this.handleError(err);
        return throwError(err);
      }));
  }

  getInterno(url: string) {
    return this.httpClient.get(url, this.agregarHeadersInternos())
      .pipe(catchError(err => {
        this.handleError(err);
        return throwError(err);
      }));
  }

  getArchivo(url: string) {
    return this.httpClient.get(url, this.agregarHeadersArchivos())
      .pipe(catchError(err => {
        this.handleError(err);
        return throwError(err);
      }));
  }

  post(url: string, body?: any) {
    return this.httpClient.post(url, body, this.agregarHeadersGenericos())
      .pipe(catchError(err => {
        this.handleError(err);
        return throwError(err);
      }));
  }

  postInterno(url: string, body?: any) {
    return this.httpClient.post(url, body, this.agregarHeadersInternos())
      .pipe(catchError(err => {
        this.handleError(err);
        return throwError(err);
      }));
  }

  postArchivo(url: string, body?: any) {
    return this.httpClient.post(url, body, this.agregarHeadersArchivos())
      .pipe(catchError(err => {
        this.handleError(err);
        return throwError(err);
      }));
  }

  delete(url: string) {
    return this.httpClient.delete(url, this.agregarHeadersGenericos())
      .pipe(catchError(err => {
        this.handleError(err);
        return throwError(err);
      }));
  }

  put(url: string, body?: any) {
    return this.httpClient.put(url, body, this.agregarHeadersGenericos())
      .pipe(catchError(err => {
        this.handleError(err);
        return throwError(err);
      }));
  }

  logOut() {
    setTimeout(() => {
      sessionStorage.clear();
    }, 1000);
  }

  handleError(err: any) {
    if (err.status == 401) { 
      this.logOut();
    } else if (err.status == 403) {
       alert('Usted no tiene permiso para la acción solicitada');
    }
  }
}
