import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }


  create(person) {
    return axios.post(`${environment.url_base}/person`, person);
  }

  getPersons() {
    return axios.get(`${environment.url_base}/person`);
  }


  removePerson(id) {
    return axios.delete(`${environment.url_base}/person/${id}`);
  }

  editPerson(person) {
    return axios.put(`${environment.url_base}/person/${person._id}`, person);
  }
}
