import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})


export class DrawService {

  constructor() { }

  draw() {
    return axios.post('http://localhost:7000/api/draw');
  }


}
