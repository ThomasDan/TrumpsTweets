import { TweetComponent } from './tweet/tweet.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  tweets: TweetComponent[];
  constructor()
  {

  }

  ngOnInit(): void {
  }

}
