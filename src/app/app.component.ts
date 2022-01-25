import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TrumpsTweets';

  images = ["trump_1.jpg", "trump_2.png", "trump_3.jpg", "trump_4.jpg", "trump_5.jpg", "trump_6.jpg"];
  currentBackground = '../assets/images/trump_1.jpg';

  ngOnInit(): void {
    this.backgroundCycle();
  }

  backgroundCycle(){
    console.log('Background cycler started!');
    (async () => {
      for(let i = 0; i < this.images.length; i++){
        console.log('Background cycler Looping! - ' + i);
        await this.delay(1000);
        this.currentBackground = '../assets/images/' + this.images[i];
        if(i+1 == this.images.length){
          i = 0;
          console.log('Background cycler restarted!');
        }
      }
    })
  }

  delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
