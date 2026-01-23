import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon   // 👈 IMPORTANTE
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
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon    // 👈 AGREGAR AQUÍ
  ],
})
export class LoginPage {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl('/home');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  forgotPassword() {
    alert('Recuperar contraseña');
  }
}
