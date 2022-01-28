import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TrumpsTweets';

  images = ["trump_1.jpg", "trump_2.png", "trump_3.jpg", "trump_4.jpg", "trump_5.jpg", "trump_6.jpg"];
  currentBackground = "url('../assets/images/trump_2.png')";

  ngOnInit(): void {
    this.backgroundCycle();
  }

  backgroundCycle(){
    setInterval(() => {
      let i = Math.floor(Math.random() * (this.images.length));
      this.currentBackground = "url(../assets/images/" + this.images[i] + ")";
    }, 5000);
  }
}
