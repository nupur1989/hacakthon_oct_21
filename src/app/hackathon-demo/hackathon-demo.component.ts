import { Component, Inject, OnInit } from '@angular/core';
import { MeetingInfo, NationalParkService } from '../services/national-park.service';
import {MatDialog} from '@angular/material/dialog';
import { SummaryTextDialogComponent } from '../summary-text-dialog/summary-text-dialog.component';


const ELEMENT_DATA: MeetingInfo[] = [
  {
    name: "Nupur Kohli's Personal Room",
      date: "02/18/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20180912",
      date: "02/18/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20191214",
      date: "02/23/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recording: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},
 
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
  pingData: string = 'test';

  recordOptions: Record[] = [
    {value: 'All', viewValue: 'All'},
    {value: 'Shared', viewValue: 'Shared'},
  ];

  constructor(private nationalParkService: NationalParkService, private dialog: MatDialog) {

   }
   openDialog(summary: any): void {
    const dialogRef = this.dialog.open(SummaryTextDialogComponent, {
      data: {
        width: '100px',
        summary: summary
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit(): void {

    this.getMeetings();

    this.getPingData();

   
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
    this.meetings.push(meeting1);``

    //this.nationalParkService.getMeetingInfo().subscribe( meetings => this.meetings = meetings);
  }

  public getMeetingSummary() : void {
    console.log("test");

    this.nationalParkService.getMySummary().subscribe( summary => {this.summary = summary
      this.openDialog(this.summary);
    });
    //return this.summary;
  }

  public getPingData() : void {
    this.nationalParkService.getPingData().subscribe(pingData => this.pingData = pingData);
    console.log(this.pingData);
  }
}
