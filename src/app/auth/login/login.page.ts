import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonButton,
  IonInput,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonIcon
  ]
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    console.log('Ingresando...', { email: this.email, password: this.password });
    this.router.navigateByUrl('/home');
  }

  goToRegister() {
    console.log('Ir a registro...');
    this.router.navigateByUrl('/register');
  }

  forgotPassword() {
    console.log('Recuperar contraseña...');
    this.router.navigateByUrl('/forgot-password');
  }
}

