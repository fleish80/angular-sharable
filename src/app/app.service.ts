import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share, publish, refCount } from 'rxjs/operators';

const url = '/assets/app.json';

export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  share(): Observable<User> {
    return this.http.get<User>(url).pipe(
      share()
    );
  }

  publish(): Observable<User> {
    return this.http.get<User>(url).pipe(
      publish(),
      refCount()
    );
  }
}
