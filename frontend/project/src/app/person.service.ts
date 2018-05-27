import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config, CONFIG} from "./model/config";
import {Person} from "./model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  people: Person[]
  constructor(
    private httpClient : HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  addPerson(person: Person){
    // console.log(customer);
    // return this.httpClient.post(`${this.config.apiUrl}/person/add`, person);
    return this.httpClient.post('/api/person/add', person);

  }

  getPeople(){
    return this.httpClient.get<Person[]>('api/person/all');
  }
}
