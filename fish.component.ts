import { Component } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent {
 
 fishData : any =[
  {
    id : 1,
    imgSrc : '',
    title : ''
  }
 ]

}


