import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from './feed/tweet/tweet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JSONReaderService {

  constructor(private http: HttpClient) { }

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>('../assets/tweets/trumpTweets.json');
  }
}
