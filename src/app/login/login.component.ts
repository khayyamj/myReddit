import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatIconRegistry, MatDialogRef } from '@angular/material';
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
              private sanitizer: DomSanitizer,
              private dialogRef: MatDialogRef<LoginComponent>) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
    });
    iconRegistry.addSvgIcon('visibility', sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/visibility.svg'));
    iconRegistry.addSvgIcon('visibility off', sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/visibility_off.svg'));
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.newUser ? this.onSignup(form) : this.onLogin(form);
  }

  onSignup(form: NgForm) {
    this.showSpinner = true;
    this.authService.signup(form.value.email, form.value.password)
      .then(() => {
        this.showSpinner = false;
        alert('Signup successful - please click Login now');
        this.newUser = false;
      })
      .catch(err => {
        alert(err);
        this.showSpinner = false;
      });
  }

  onLogin(form: NgForm) {
    this.showSpinner = true;
    this.authService.login(form.value.email, form.value.password)
      .then(() => {
        this.showSpinner = false;
        this.newUser = false;
        this.loginForm.reset();
        this.dialogRef.close(true);
      })
      .catch(err => {
        alert(err);
        this.showSpinner = false;
      });
  }

}
