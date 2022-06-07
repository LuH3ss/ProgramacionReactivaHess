import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class MessagesService {
  messages: string[] = [
    'You are my hero!',
  ];
  constructor(public http: HttpClient) { 

  }
  getData(url: string): Observable<any> {
    return this.http.get(url).pipe(map((apiResult: any) =>
                apiResult.results
            ));;
}

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }


}
