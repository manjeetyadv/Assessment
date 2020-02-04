import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class profileService {

  uri = 'http://localhost:4000/profiles';

  constructor(private http: HttpClient) { 
  }

  getProfile() {
    console.log('hello')
    return this.http.get(`${this.uri}`);
  }

  updateProfile(data):  Observable<any> {
   
    return this
      .http
      .post(`${this.uri}/update`, data)
      
  }


}
