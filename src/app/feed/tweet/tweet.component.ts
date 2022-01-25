import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from './tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  stringedDate: string;

  constructor()
  {

  }

  ngOnInit(): void {
    let date = new Date(this.tweet.date);
    this.stringedDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + "  " + date.getDate() + '/' + (date.getMonth() + 1) + '-' + date.getFullYear();
  }

}
