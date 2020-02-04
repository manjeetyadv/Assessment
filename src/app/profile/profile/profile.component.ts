import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-image',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    url = '';

  constructor() { }

  ngOnInit() {
  }

    onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target['result'];
      }
    }
  }
  public delete(){
    this.url = null;
  }

}