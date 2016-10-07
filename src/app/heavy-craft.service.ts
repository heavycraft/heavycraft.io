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

interface IHero {
  headerTop: string;
  header: string;
  subHeader: string;
  image: string;
}

interface IService {
  id?: number;
  active?: number;
  name: string;
  description: string;
  icon?: any;
}

interface IAbout {
  title: string;
  description: string;
  services?: Observable<IService[]>;
}

interface IContact {
  title: string;
  description: string;
}

interface ILocation {
  lat: number;
  lng: number;
  city: string;
  state: string;
  state_code: string;
  country_code: string;
  street_name: string;
  street_number: string;
  zip: string;
  zoom_level: number;
  icon?: any;
}

interface ISocial {
  name: string;
  url: string;
}

@Injectable()
export class HeavyCraftService {

  private _hero: Observable<IHero> = null;

  params: URLSearchParams = new URLSearchParams();

  constructor(private http: Http) {
    this.params.set('access_token', environment.apiToken);
    this.params.set('status', '1'); //only show active
  }

  getHero(): Observable<IHero> {
    let endpoint = `${API_URL}/tables/hero/rows/1`;
    this._hero = this.http.get(endpoint, {search: this.params})
      .map(this.extractHeroData)
      .catch(this.handleError);
    return this._hero;
  }

  getAbout(): Observable<IAbout> {
    let endpoint = `${API_URL}/tables/about/rows/1`;
    return this.http.get(endpoint, {search: this.params})
      .map(this.extractAboutData)
      .catch(this.handleError);
  }

  getServices(): Observable<IService[]> {
    let endpoint = `${API_URL}/tables/services/rows`;
    return this.http.get(endpoint, {search: this.params})
      .map(this.extractServiceData)
      .catch(this.handleError);
  }

  getContact(): Observable<IContact> {
    let endpoint = `${API_URL}/tables/contact/rows/1`;
    return this.http.get(endpoint, {search: this.params})
      .map(this.extractContactData)
      .catch(this.handleError);
  }

  getLocation(): Observable<ILocation> {
    let endpoint = `${API_URL}/tables/location/rows/1`;
    return this.http.get(endpoint, {search: this.params})
      .map(this.extractLocationData)
      .catch(this.handleError);
  }

  getSocial(): Observable<ISocial> {
    let endpoint = `${API_URL}/tables/social/rows`;
    return this.http.get(endpoint, {search: this.params})
      .map(this.extractSocialData)
      .catch(this.handleError);
  }

  private extractSocialData(res: Response) {
    let body = res.json();
    let social: ISocial[] = [];
    body.rows.forEach((s: ISocial) => {
      social.push({
        name: s.name,
        url: s.url
      });
    });
    return social;
  }

  private extractLocationData(res: Response) {
    let body = res.json();
    let coords = body.lat_lng.split(',');
    let location: ILocation = {
      lat: parseFloat(coords[0]),
      lng: parseFloat(coords[1]),
      city: body.city,
      state: body.state,
      state_code: body.state_code,
      country_code: body.country_code,
      street_name: body.street_name,
      street_number: body.street_number,
      zip: body.zip,
      zoom_level: body.zoom_level,
      icon: (body.marker_icon ? (API_BASE_URL + body.marker_icon.url) : null)
    };

    return location || {};
  }

  private extractContactData(res: Response) {
    let body = res.json();
    let contact: IContact = {
      title: body.header,
      description: body.body
    };
    return contact || {};
  }

  private extractAboutData(res: Response) {
    let body = res.json();
    let about: IAbout = {
      title: body.header,
      description: body.body,
    };
    return about || {};
  }

  private extractServiceData(res: Response) {
    let body = res.json();
    let services: IService[] = [];
    body.rows.forEach((s: IService) => {
      services.push({
        name: s.name,
        description: s.description,
        icon: (s.icon ? `${API_BASE_URL}/${s.icon.url}` : null)
      });
    });
    return services;
  }

  private extractHeroData(res: Response) {
    let body = res.json();
    let hero: IHero = {
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
