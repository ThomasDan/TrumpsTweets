import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  tweets = [
    {date: new Date('10-11-2021 12:13:14'), message:'Hello World!', likes:100}
  ];

  constructor()
  {

  }

  ngOnInit(): void {
    console.log(this.tweets[0]);
  }

}
