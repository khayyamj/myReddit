import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { AuthService } from './../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  newUser: boolean;
  showSpinner: boolean;


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
    });
    iconRegistry.addSvgIcon('visibility', sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/visibility.svg'));
    iconRegistry.addSvgIcon('visibility off', sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/visibility_off.svg'));
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log('Form: ', form.value);
  }

  onSignup(form: NgForm) {
    this.showSpinner = true;
    console.log('Form:', form.value);
    this.authService.signup(form.value.email, form.value.password)
      .then(() => {
        this.showSpinner = false;
        alert('Signup successful - please Login');
        this.newUser = false;
      })
      .catch(err => {
        console.error(err);
        // this.showSpinner = false;
      });
  }

}
