import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy{
  public users: User[] = [];
  private sub: Subscription = new Subscription();
  
  constructor(private httpService: HttpService) { 
  }

  // კომპონენტის შექმნისას გამოიძახებს HTTP ფუნქციას და შეინახავს იუზერებს ლოკალურ ცვლადში.
  ngOnInit(): void{
    this.sub = this.httpService.getUsers().subscribe(apiUsers => {
      this.users = apiUsers
    })
  }

  // სუბსკრიპციის გაუქმება Memory ლიქებისთვის
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
