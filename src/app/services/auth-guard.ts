import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth';

@Injectable()
export class AuthGuardService implements CanActivate {
	constructor(public authService: AuthService, public router: Router) { }
	canActivate(): boolean {
		if (!this.authService.authenticated) {
			this.router.navigate(['']);
			alert('Please login to view this page');
			return false;
		}
		return true;
	}
}
