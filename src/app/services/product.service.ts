import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from '../app.configs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<any> {
    return this.http.get(Config.toApiUrl('products'))
      .pipe(map(data => data));
  }
}
