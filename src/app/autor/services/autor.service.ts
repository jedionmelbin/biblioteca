import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Autor} from '../model/autor';
import {AppSettings} from '../../common/AppSettings';


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  public url: string;


  constructor(private  httpclient: HttpClient) {
    this.url = AppSettings.API_ENDPOINT;
  }

  getAutors(): Observable<any> {
    return this.httpclient.get(this.url + 'autores/listaAutor');
  }

  addAutor(data: Autor): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpclient.post<Autor>(AppSettings.API_ENDPOINT + 'autores/create', data);
  }
}
