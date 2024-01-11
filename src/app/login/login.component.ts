import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSignIn: boolean = true;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });
  }

  ngOnInit(): void {}

  toggleFormMode() {
    this.isSignIn = !this.isSignIn;
    this.authForm.reset();
  }

  submitForm() {
    // Handle sign-in or sign-up logic here
    if (this.isSignIn) {
      // Sign In
      console.log('Sign In', this.authForm.value);
    } else {
      // Sign Up
      console.log('Sign Up', this.authForm.value);
    }
  }
}

