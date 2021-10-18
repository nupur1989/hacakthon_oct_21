import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NationalPark, NationalParkService } from '../services/national-park.service';

@Component({
  selector: 'app-national-park',
  templateUrl: './national-park.component.html',
  styleUrls: ['./national-park.component.scss']
})
export class NationalParkComponent implements OnInit {

  parksDetailsFrom: FormGroup; 
  nationalParks: NationalPark[] = [];
  constructor(private nationalParkService: NationalParkService, private fb: FormBuilder) { 

    this.parksDetailsFrom = this.fb.group({});
  }

  ngOnInit(): void {

    const group = {
      searchInputText : { value: ''}
    }
    
    this.parksDetailsFrom = this.fb.group(group);
    this.getNationalParks();

    this.parksDetailsFrom.controls.searchInputText.valueChanges.subscribe(value => {
      console.log(value);
      this.searchParks(value);
});
  }

  getNationalParks() : void{

    this.nationalParkService.getNationalPark().subscribe( parks => this.nationalParks = parks);
  }

  searchParks( input: string) : void{
    debugger;
    this.nationalParks = this.nationalParks.filter( park => park.name.includes(input) || park.location.includes(input))
  }

}
