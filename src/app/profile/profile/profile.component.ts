import { Component, OnInit } from '@angular/core';
import { profileService } from './profile.service';
import profile from './profile';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'profile-image',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  url = '';
  profile: profile[];
  profileDetail: any;

  constructor(private profileService: profileService, private _formBuilder: FormBuilder) {
    this.profileService.getProfile().subscribe((data: profile[]) => {
      this.profile = data;
      this.profileForm.patchValue({
        name: data[0]['name'],
        mobile: data[0]['mobile'],
        email: data[0]['email'],
        dob: data[0]['dob']
      })
    });

  }

  ngOnInit() {
    this.createForm();
  }
  /**
    * Create Profile form
    *
    * @returns {void}
    */
  createForm(): void {
    this.profileForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });
  }
  // Select Image
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target['result'];
      }
    }
  }


  //Update Profile
  update(): void {
    console.log(this.profileForm.value)
    this.profileService.updateProfile(this.profileForm.value).subscribe(
      res => {
        console.log('res', res)
      }
    )

  }

}