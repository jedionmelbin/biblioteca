import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Autor} from '../model/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private url = 'http://localhost:8089/api/autor/listaAutor';

  constructor(private  httpclient: HttpClient) {
  }

  getAutors(): Observable<any> {
    console.log('execute service');
    return this.httpclient.get(`${this.url}`);
  }

  addAutor(data: Autor): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(JSON.stringify(data));
    return this.httpclient.post<Autor>('http://localhost:8089/api/autor/create', data, httpOptions);
  }
}
