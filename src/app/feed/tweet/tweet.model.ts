export class Tweet{
  date: Date = new Date('10-11-2001 12:13:14');
  text: string = 'Message not found!';
  likes: number = -1;

  constructor(date: Date, text: string, likes: number){
    this.date = date;
    this.text = text;
    this.likes = likes;
  }

}
