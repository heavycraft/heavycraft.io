import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface MailBody {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
}

@Injectable()
export class MailService {


  constructor(private http: Http) { }

  send(mail: MailBody): Observable<any> {
    return this.http.post('http://mailservice.heavycraft.io/mail', mail)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
