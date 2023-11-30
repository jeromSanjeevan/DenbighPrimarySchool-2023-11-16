import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogledriveService {
  private readonly API_URL = 'https://drive.google.com/drive/folders/1sQK3XrSpeXMoCMIp_1cwspt1lxKx0G0h';
  
  constructor(private http: HttpClient) { }


  getFiles() {
    const url = `${this.API_URL}/files`;
    // const params = {
    //   key: this.API_KEY,
    //   access_token: this.ACCESS_TOKEN,
    // };

    return this.http.get(url);
  }
}
