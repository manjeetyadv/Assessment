import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup: FormGroup;
  post:string;
  password:string;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() 
  {
    this.createForm();
  }

  createForm() 
  {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  onSubmit(post)
   {
    this.post = post;
    console.log(post);
    if( this.post['username'] === "user" && this.post['password'] === "password" )
    {
      this.router.navigate(['/tables']);
    }
    else
    {
        window.alert('Invalid User');
    }
  }

  hide = true;
}