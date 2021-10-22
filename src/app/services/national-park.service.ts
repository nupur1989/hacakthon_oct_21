import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
import { Observable, of } from 'rxjs';


export interface MeetingInfo{

  name: string,
  date: string,
  recordingURL?: string,
  duration: string,
  size: string,
  format: string,
  summary: string,
  meetingId?: string,
}

export interface NationalPark{

  "name": string,
  "photo": string,
  "location": string,
  "dateFounded": string,
  "area": number,
  "visitors": number
}

@Injectable({
  providedIn: 'root'
})

export class NationalParkService {

  url = "https://gist.githubusercontent.com/afiedler/3f388de6159f84bbe330e1a8289006a6/raw/59a2f67bbe0e4891bba22241406d7bd93bd8fb6b/parks.json";
  
  pingUrl= "https://wap-notification-service.intc1.ciscospark.com/wpns/api/v1/ping"
  meetingInfoUrl = "https://wap-notification-service.intb2.ciscospark.com/wpns/api/v2/meetings"
  meetingSummaryUrl = "https://wap-notification-service.intb2.ciscospark.com/wpns/api/v2/summary"
  
  constructor(private http: HttpClient) { }

  getNationalPark(): Observable<NationalPark[]>{

    return this.http.get<NationalPark[]>(this.url);
  }

  getMeetingInfo(): Observable<MeetingInfo[]>{

    return this.http.get<MeetingInfo[]>(this.meetingInfoUrl);
  }
   

  getMySummary(id:string) : Observable<string>{
    return this.http.get<string>(this.meetingSummaryUrl + "/" +id)
    //return of('This is Smmary test This is Smmary test This is Smmary test This is Smmary test This is Smmary test This is Smmary test This is Smmary test This is Smmary test This is Smmary test This is Smmary test This is Smmary test This is Smmary test');
  }

  getPingData() : Observable<string>{
    return this.http.get<string>(this.pingUrl);
  }
}
