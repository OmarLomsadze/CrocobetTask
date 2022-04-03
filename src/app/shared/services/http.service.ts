import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { StringConstants } from '../string.constant';

@Injectable({
  providedIn: 'root'
})
// სერვისი სადაც შენახული იქნება HTTP call  ფუნქციები
export class HttpService {

  constructor(private http: HttpClient) {}

  // ფუნქცია რომელიც გამოიძახებს ლინკს და დააბრუნებს იუზერების სიას
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(StringConstants.USERS_URL);
  }

  // ფუნქცია რომელიც დააბრუნებს კონკრეტული იდ -ით იუზერს
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(StringConstants.USER_URL_BY_ID + userId);
  }

  // ფუნქცია რომელიც დააბრუნებს შესაბამისი იუზერის პოსტებს
  getPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(StringConstants.POSTS_URL + userId);
  }
}
