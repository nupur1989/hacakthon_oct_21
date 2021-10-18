import { Component, Inject, OnInit } from '@angular/core';
import { MeetingInfo, NationalParkService } from '../services/national-park.service';
import {MatDialog} from '@angular/material/dialog';
import { SummaryTextDialogComponent } from '../summary-text-dialog/summary-text-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: MeetingInfo[] = [
  {
    name: "name1",
      date: "10jan 2020",
      recording: "recording link",
      summary: "summary"},

      {name: "name2",
      date: "10jan 2020",
      recording: "recording link",
      summary: "summary"},

      {name: "name3",
      date: "10jan 2020",
      recording: "recording link",
      summary: "summary"},

      {name: "name4",
      date: "10jan 2020",
      recording: "recording link",
      summary: "summary"},
 
];

interface Record {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hackathon-demo',
  templateUrl: './hackathon-demo.component.html',
  styleUrls: ['./hackathon-demo.component.scss']
})
export class HackathonDemoComponent implements OnInit {

  displayedColumns: string[] = ['name', 'date', 'recording', 'summary'];
  dataSource = ELEMENT_DATA;
  
  meetings : MeetingInfo[] = [];
  summary : string = 'summary';

  recordOptions: Record[] = [
    {value: 'All', viewValue: 'All'},
    {value: 'Shared', viewValue: 'Shared'},
  ];

  constructor(private nationalParkService: NationalParkService, private dialog: MatDialog) {

   }
   openDialog(): void {
    const dialogRef = this.dialog.open(SummaryTextDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit(): void {

    this.getMeetings();

   
  }


  getMeetings() : void{

    const meeting1 : MeetingInfo = {
      name:"name1",
      date: "10jan 2020",
      recording: "recording link",
      summary: "summary"
    }

    this.meetings.push(meeting1);
    this.meetings.push(meeting1);
    this.meetings.push(meeting1);

    //this.nationalParkService.getMeetingInfo().subscribe( meetings => this.meetings = meetings);
  }

  public getMeetingSummary() : void {
    //console.log("test");

    this.openDialog();
    //this.nationalParkService.getMySummary().subscribe(summary => this.summary = summary);
    //return this.summary;
  }
}
