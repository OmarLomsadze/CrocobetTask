import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit, OnDestroy {
  public postSub: Subscription = new Subscription();
  public posts: Post[] = [];

  constructor(private route: ActivatedRoute, private httpService: HttpService, private location: Location) { }

  // კომპონენტის შექმნისას ვიღებთ გადმომისამართებული ქვერიდან იუზერის აიდის და მაგ აიდით ვაბრუნებთ იუზერის პოსტებს
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postSub =this.httpService.getPosts(id).subscribe(userPosts => {
      this.posts = userPosts;
    })
  }

  goBack():void {
    this.location.back();
  }

  // სუბსცკრიფციის გაუქმება Memory ლიქისთვის
  ngOnDestroy(): void {
      this.postSub.unsubscribe();
  }

}
