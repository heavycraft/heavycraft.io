import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/cache';
import 'rxjs/add/observable/from';

const API_URL = 'http://api.heavycraft.io/api/1';

@Injectable()
export class HeavyCraftService {

  private _hero: Observable<any> = null;

  constructor(private http: Http) { }

  getHero(): Observable<any> {
    let endpoint = `${API_URL}/tables/hero/rows/1`;
    this._hero = this.http.get(endpoint)
      .map(this.extractData)
      .catch(this.handleError);
    return this._hero;
  }

  private extractData(res: Response) {
    console.log(res.json());
    let body = res.json();
    return body || {};
  }

  private handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
