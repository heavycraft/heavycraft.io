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

import { environment } from '../environments/environment';

const API_BASE_URL = 'http://api.heavycraft.io';
const API_URL = `${API_BASE_URL}/api/1`;

@Injectable()
export class HeavyCraftService {

  private _hero: Observable<any> = null;
  params: URLSearchParams = new URLSearchParams();

  constructor(private http: Http) {
    this.params.set('access_token', environment.apiToken);
  }

  getHero(): Observable<any> {
    let endpoint = `${API_URL}/tables/hero/rows/1`;
    this._hero = this.http.get(endpoint, {search: this.params})
      .map(this.extractHeroData)
      .catch(this.handleError);
    return this._hero;
  }

  private extractHeroData(res: Response) {
    let body = res.json();
    let hero = {
      headerTop: body.header_line_1,
      header: body.header_main,
      subHeader: body.sub_header,
      image: `${API_BASE_URL}/${body.hero_image.url}`
    };
    return hero || {};
  }

  private handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
