import { Component, OnInit } from '@angular/core';

import { Tweet } from './tweet/tweet.model';
import { JSONReaderService } from '../jsonreader.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  tweets: Tweet[] = [];


  constructor(private jsonReader: JSONReaderService)
  {

  }

  ngOnInit(): void {
    this.jsonReader.getTweets().subscribe((data: Tweet[]) => {
      next: this.tweets = data;
    });
  }

}
