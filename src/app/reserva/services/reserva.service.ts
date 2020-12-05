import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../../common/AppSettings';
import {Observable} from 'rxjs';
import {Libro} from '../../libro/model/Libro';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  public url: string;


  constructor(private  httpclient: HttpClient) {
    this.url = AppSettings.API_ENDPOINT;
  }

  getLibro(): Observable<any> {
    return this.httpclient.get(this.url + 'libros/listaLibro');
  }

  addLibro(data: Libro): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpclient.post<Libro>(AppSettings.API_ENDPOINT + 'libros/create', data);
  }
}
