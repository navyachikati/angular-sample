import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 siteName:string="AngDemoApp"
 isChecked:boolean=true;
 names:Array<string> = ["Bhanu","Jhanu","Chandu","Charan"]
 employees:any= [{
  "id": 101,
  "name": "BHanu",
  "desg": "PM",
  "sal": 9000000
},
{
  "id": 102,
  "name": "BHavya",
  "desg": "PL",
  "sal": 8000000
},
{
  "id": 103,
  "name": "BHajan",
  "desg": "TM",
  "sal": 7000000
},
{
  "id": 104,
  "name": "CHandu",
  "desg": "TL",
  "sal": 6000000
},
{
  "id": 105,
  "name": "CHaran",
  "desg": "QA",
  "sal": 5000000
}
];
course:string="MEAN"


}
