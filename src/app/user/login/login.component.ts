import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AngularFireAuth) {

  }

  credentials = {
    email: '',
    password: ''
  }

  showAlert: boolean = false
  alertMsg: string = 'Please wait! we\'re logging you in'
  alertColor: string = 'blue'

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait. logging in!'
    this.alertColor = 'blue'
    try {
      await this.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password)

    } catch (error) {
      this.alertMsg = 'n unexpected error occured. Please try again later'
      this.alertColor = 'red'
      this.showAlert = false
    }
    this.alertMsg = 'Success! Logged In'
    this.alertColor = 'green'
  }
}
