import { Component, Inject, OnInit } from '@angular/core';
import { MeetingInfo, NationalParkService } from '../services/national-park.service';
import {MatDialog} from '@angular/material/dialog';
import { SummaryTextDialogComponent } from '../summary-text-dialog/summary-text-dialog.component';


const ELEMENT_DATA: MeetingInfo[] = [
  {
    name: "Nupur Kohli's Personal Room",
      date: "02/18/2021 2:08 pm",
      recordingURL: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary",
      meetingId: "1"},

      {name: "Webex Team meeting-20180912",
      date: "02/18/2021 2:08 pm",
      recordingURL: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20191214",
      date: "02/23/2021 2:08 pm",
      recordingURL: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recordingURL: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recordingURL: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recordingURL: "recording link",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      summary: "Summary"},

      {name: "Webex Team meeting-20201213",
      date: "02/20/2021 2:08 pm",
      recordingURL: "recording link",
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
   
  }

  getMeetings() : void{

   this.meetings = 
    [
      {
          "meetingId": "1",
          "name": "Nir",
          "format": "MP4",
          "size": "8 MB",
          "summary": "RingCentral has a broad portfolio of products that Cisco is bringing to market and going to customers and saying, hey, Mr. customer. You don't have to basically come and sort of pay something separate because you're a sweet customer . The other major thing that we have never said, uh, before, but we are saying is the way is going to work Mr. Customer. You automatically basically get whatever Cisco basically acquires buys develops. The value proposition on top of value properties. That means your investment is basically insure right? For the long term. The whole premise of suite that I kind of sort of explain is kind of the Java strategy, right? As we expand the portfolio. We basically to our customers, make sure that they are ... they are able to basically get and use everything and our portfolio. The next thing that you have to ... use everything. The. You want a certain tier license. It's already included. The way is that Cisco basically acquired this company called Social, which basically does hybrid demands you. For example Cisco acquired Social . For example, Social. It basically does hybrids demands you basically get. You. automatically get. The . technology that Cisco basic acquired Social. for Social. which basically . basically acquired Social Social. and it basically do hybrid demands. For . example, which . basically do hybrids. For the purposes of social. for the reasons of Social. For. the. Customers. For For the reasons. Cisco. For ... the. Computer. For The Security Services. For Cisco. It’s the. Systems. For you. To provide you. You have to provide you with the. Technology. To create a hybrid. To make sure you. have a hybrid demand you. need to provide a hybrid demands, you. provide. seamless seamless integration. For us, we have a very aggressive pricepoint, so that’ve never said. We’re happy to provide that. We are happy to communicate with each other. For our customers. To do that, we’d like to provide. We. appreciate that. To see that. You’ll have to sort of understand that. There’t have to accept that. The technology. To sort of provide. that. In fact, we. accept that, you’m happy to share that. That’ve got to basically sort of . accept that Cisco’S. seamless integration and that. that means Cisco",
          "recordingURL": "dummyUrl",
          "date": "2021-12-27T12:00:02.000Z",
          "duration": "1 hour"
      },
      {
          "meetingId": "10",
          "name": "Nupur Kohli's Personal Room 10",
          "format": "MP4",
          "size": "9.8 MB",
          "summary": "Dummy summary 10",
          "recordingURL": "dummyUrl",
          "date": "2021-08-25T12:00:02.000Z",
          "duration": "19 mins"
      },
      {
          "meetingId": "2",
          "name": "Nupur Kohli's Personal Room 2",
          "format": "MP4",
          "size": "9.8 MB",
          "summary": "Dummy summary 2",
          "recordingURL": "dummyUrl",
          "date": "2021-12-26T12:00:02.000Z",
          "duration": "46 mins"
      },
      {
          "meetingId": "3",
          "name": "Nupur Kohli's Personal Room 3",
          "format": "MP4",
          "size": "7.4 MB",
          "summary": "Dummy summary 3",
          "recordingURL": "dummyUrl",
          "date": "2021-11-26T12:00:02.000Z",
          "duration": "44 mins"
      },
      {
          "meetingId": "4",
          "name": "Nupur Kohli's Personal Room 4",
          "format": "MP4",
          "size": "9.1 MB",
          "summary": "Dummy summary 4",
          "recordingURL": "dummyUrl",
          "date": "2021-09-27T12:00:02.000Z",
          "duration": "56 mins"
      },
      {
          "meetingId": "5",
          "name": "Nupur Kohli's Personal Room 5",
          "format": "MP4",
          "size": "10.5 MB",
          "summary": "Dummy summary 5",
          "recordingURL": "dummyUrl",
          "date": "2021-07-18T12:00:02.000Z",
          "duration": "48 mins"
      },
      {
          "meetingId": "6",
          "name": "Nupur Kohli's Personal Room 6",
          "format": "MP4",
          "size": "18.2 MB",
          "summary": "Dummy summary 6",
          "recordingURL": "dummyUrl",
          "date": "2021-06-24T12:00:02.000Z",
          "duration": "52 mins"
      },
      {
          "meetingId": "7",
          "name": "Nupur Kohli's Personal Room 7",
          "format": "MP4",
          "size": "4 MB",
          "summary": "Dummy summary 7",
          "recordingURL": "dummyUrl",
          "date": "2021-09-24T12:00:02.000Z",
          "duration": "43 mins"
      },
      {
          "meetingId": "8",
          "name": "Nupur Kohli's Personal Room 8",
          "format": "MP4",
          "size": "6.7 MB",
          "summary": "Dummy summary 8",
          "recordingURL": "dummyUrl",
          "date": "2021-10-20T12:00:02.000Z",
          "duration": "51 mins"
      },
      {
          "meetingId": "9",
          "name": "Nupur Kohli's Personal Room 9",
          "format": "MP4",
          "size": "7.6 MB",
          "summary": "Dummy summary 9",
          "recordingURL": "dummyUrl",
          "date": "2021-05-16T12:00:02.000Z",
          "duration": "30 mins"
      }
  ]

  /*
    const meeting1 : MeetingInfo = {
      name:"name1",
      date: "10jan 2020",
      recording: "recording link",
      summary: "summary",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      meetingId: '1'
    }

    const meeting2 : MeetingInfo = {
      name:"name2",
      date: "10jan 2020",
      recording: "recording link2",
      summary: "summary",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      meetingId: '2'
    }

    const meeting3 : MeetingInfo = {
      name:"name3",
      date: "10jan 2020",
      recording: "recording link2",
      summary: "summary",
      duration: "0:01:50",
      size: "9.8MB",
      format: "MP4",
      meetingId: '3'
    }

    this.meetings.push(meeting1);
    this.meetings.push(meeting2);
    this.meetings.push(meeting3);
    */

    //this.nationalParkService.getMeetingInfo().subscribe( meetings => this.meetings = meetings);

    this.meetings.forEach( elem => {
      elem.recordingURL = "recordingURL";
    });

  }

  public getMeetingSummary(id:string) : void {
    this.nationalParkService.getMySummary(id).subscribe( summary => {this.summary = summary
      this.openDialog(this.summary);
    });
  }
}
