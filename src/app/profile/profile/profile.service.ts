import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class profileService {
  uri = "http://localhost:4000/profiles";

  constructor(private http: HttpClient) {}
  //Get Profile
  getProfile() {
    console.log("hello");
    return this.http.get(`${this.uri}`);
  }

  //Update Profile
  updateProfile(data, id): Observable<any> {
    return this.http.put(`${this.uri}/update/${id}`, data);
  }
}
