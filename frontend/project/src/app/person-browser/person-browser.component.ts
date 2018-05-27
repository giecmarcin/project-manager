import { Component, OnInit } from '@angular/core';
import {Person} from "../model/person";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-person-browser',
  templateUrl: './person-browser.component.html',
  styleUrls: ['./person-browser.component.css']
})
export class PersonBrowserComponent implements OnInit {

  people: Person[];
  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.loadAllPeople();
  }

  loadAllPeople(){
    this.personService.getPeople().subscribe(response =>{
      this.people = response;
    })
  }

}
