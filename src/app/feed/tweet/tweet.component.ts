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
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth()+1;
    this.stringedDate = (hours < 10? '0' : '') + hours + ':' + (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs + "  " + (day < 10 ? ' ' : '') + day + '/' + (month < 10 ? '0' : '') + month + '-' + date.getFullYear();
  }

}
