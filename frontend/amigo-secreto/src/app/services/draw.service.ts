import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})


export class DrawService {

  constructor() { }

  draw() {
    return axios.post(`${environment.url_base}/draw`);
  }


}
