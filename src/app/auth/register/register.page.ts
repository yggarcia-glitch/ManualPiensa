import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
// Asegúrate de que esta ruta sea correcta según tu estructura
import { AuthService } from '../../services/auth.service';

import {
  IonContent,
  IonButton,
  IonInput,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { person, lockClosed, mail } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
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
export class RegisterPage implements OnInit {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
    // Registramos los iconos necesarios
    addIcons({ person, lockClosed, mail });
  }

  ngOnInit() { }

  // Función para REGISTRAR al usuario
  async register() {
    if (!this.email || !this.password) {
      this.mostrarMensaje('Por favor, completa todos los campos', 'warning');
      return;
    }

    try {
      const userCredential = await this.authService.register(this.email, this.password);
      
      if (userCredential.user) {
        console.log('Registro exitoso');
        this.mostrarMensaje('¡Cuenta creada! Bienvenido.', 'success');
        this.router.navigate(['/componentes']); 
      }
    } catch (error: any) {
      console.error('Error en registro:', error);
      let msg = 'No se pudo crear la cuenta.';
      
      if (error.code === 'auth/email-already-in-use') msg = 'Este correo ya está registrado.';
      if (error.code === 'auth/weak-password') msg = 'La contraseña debe tener al menos 6 caracteres.';
      if (error.code === 'auth/invalid-email') msg = 'El correo no es válido.';
      
      this.mostrarMensaje(msg, 'danger');
    }
  }

  // Función para VOLVER al Login (Solución al botón que no servía)
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Helper para mostrar alertas
  async mostrarMensaje(texto: string, color: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2500,
      color: color,
      position: 'bottom',
      mode: 'ios'
    });
    await toast.present();
  }
}