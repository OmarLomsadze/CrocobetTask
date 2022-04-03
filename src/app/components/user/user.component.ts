import { Location } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() public user!: User;
  private userSub: Subscription = new Subscription();

  constructor(private httpService: HttpService, private route: ActivatedRoute,private location: Location) {}

  // ვიღებთ ქუერიდან იუზერ აიდის და ვაბრუნებთ იუზერის მონაცემებს
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userSub = this.httpService.getUserById(id).subscribe(apiUser => {
      this.user = apiUser;
    })
  }

  // სუბსკრიფციის მოშორება Memory ლიქისთვის
  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }

  goBack():void {
    this.location.back();
  }
}
