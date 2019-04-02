import { Component, OnInit } from '@angular/core';
import { AppService, User } from './app.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-sharable';

  share$: Observable<User>;
  nameShare$: Observable<string>;
  ageShare$: Observable<string>;

  publish$: Observable<User>;
  namePublish$: Observable<string>;
  agePublish$: Observable<string>;

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.share$ = this.appService.share();
    this.publish$ = this.appService.publish();
  }

  updateShare() {
    this.nameShare$ = this.share$.pipe(
      map(user => user.name + 'update')
    );
    this.ageShare$ = this.share$.pipe(
      map(user => user.age + 'updated')
    );
  }

  updatePublish() {
    this.namePublish$ = this.publish$.pipe(
      map(user => user.name + 'update')
    );
    this.agePublish$ = this.publish$.pipe(
      map(user => user.age + 'updated')
    );
  }



}
