import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  date: Date;
  message: string;
  likes: number;

  constructor(date: Date, message: string, likes: number)
  {
    this.date = date;
    this.message = message;
    this.likes = likes;
  }

  ngOnInit(): void {
  }

}
