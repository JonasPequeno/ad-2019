import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person';
import { DrawService } from 'src/app/services/draw.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  person: Person = {} as Person;
  persons = [];
  edit: boolean = false;
  isDraw = false;

  constructor(
    private service: PersonService,
    private drawService: DrawService
  ) { }

  ngOnInit(): void {
    this.getPersons();
  }

  submitPerson() {
    this.service.create(this.person)
      .then(result => {
        this.persons.push(result.data);
        this.person = {} as Person;
      })
  }

  getPersons() {
    this.service.getPersons()
      .then(persons => {
        this.persons = persons.data;
      })
  }

  removePerson(person) {
    this.service.removePerson(person._id)
      .then(result => {
        if (result.status === 204) {
          let index = this.persons.indexOf(person);
          this.persons.splice(index, 1);
        }
      });
  }


  saveEdition() {
    this.service.editPerson(this.person)
      .then(result => {
        if (result.status === 201) {
          this.getPersons();
          this.person = {} as Person;
          this.edit = false;
        }
      })
  }

  loadData(person) {
    this.person = person;
    this.edit = true;
  }

  cancelEdition() {
    this.getPersons();
    this.person = {} as Person;
    this.edit = false;
  }

  draw() {
    if (this.persons.length >= 4) {
      this.drawService.draw()
        .then(result => {
          if (result.status == 200) {
            this.isDraw = true;
          }
        })
    }
  }

}
