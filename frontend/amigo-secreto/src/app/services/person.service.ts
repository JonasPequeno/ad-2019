import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }


  create(person) {
    return axios.post('http://localhost:7000/api/person', person);
  }

  getPersons() {
    return axios.get('http://localhost:7000/api/person');
  }


  removePerson(id) {
    return axios.delete(`http://localhost:7000/api/person/${id}`);
  }

  editPerson(person) {
    return axios.put(`http://localhost:7000/api/person/${person._id}`, person);
  }
}
