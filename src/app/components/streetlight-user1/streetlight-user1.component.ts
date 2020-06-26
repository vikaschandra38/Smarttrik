import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-streetlight-user1',
  templateUrl: './streetlight-user1.component.html',
  styleUrls: ['./streetlight-user1.component.css']
})
export class StreetlightUser1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
