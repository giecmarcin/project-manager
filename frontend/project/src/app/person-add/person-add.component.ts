import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonService} from "../person.service";
import {Person} from "../model/person";


@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  personForm: FormGroup;
  @Input() people: Person[];


  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.personForm = this.buildPersonForm();
  }

  buildPersonForm() {
    return this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required]
    });
  }

  addPerson(){
    this.personService.addPerson(this.personForm.value).subscribe(response=>{
      // this.personService.getPeople().subscribe(data=>{
      //   console.log(this.people);
      //   console.log(data);
      // })
    });
  }
}
