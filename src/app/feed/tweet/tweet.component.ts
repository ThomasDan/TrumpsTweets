import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() date: Date = new Date('10-11-2001 12:13:14');
  @Input() message: string = 'Message not found!';
  @Input() likes: number = -1;
  stringedDate: string;

  constructor()
  {

  }

  ngOnInit(): void {
    this.stringedDate = this.date.getHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds() + "  " + this.date.getDate() + '/' + (this.date.getMonth()+1) + '-' + this.date.getFullYear();
  }

}
