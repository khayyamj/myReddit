import * as firebase from 'firebase';

export class AuthService {
	public authenticated = false;

	signup(email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password);
	}

	login(email: string, password: string) {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	}

	isAuthenticated() {
		this.authenticated = true;
	}

	isLoggedOut() {
		this.authenticated = false;
	}
}