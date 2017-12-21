import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
    });
  }

  ngOnInit() {
  }

  onLogin(form) {
    console.log('Form: ', form.value);
  }

}
