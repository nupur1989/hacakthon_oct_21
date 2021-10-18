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
    name: "Nupur Kohli's Personal Room",
      date: "02/18/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP$",
      summary: "summary"},

      {name: "Webex Team meeting-20180912",
      date: "02/18/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP$",
      summary: "summary"},

      {name: "Webex Team meeting-20191214",
      date: "02/23/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      summary: "summary",
      size: "9.8MB",
      format: "MP$"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
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

  displayedColumns: string[] = ['name', 'date', 'recording','duration', 'size' ,'format', 'summary'];
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
      summary: "summary",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4"
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
