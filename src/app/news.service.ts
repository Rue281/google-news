import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public httpClient: HttpClient) { }
  private apiUrl =
    "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4";

    getNews(): Observable<Object>{
      return this.httpClient.get(this.apiUrl).catch(this.handleError);
    }

    private handleError(error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const err = error || "";
        errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
  }
