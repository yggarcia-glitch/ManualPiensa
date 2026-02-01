import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular'; 
// IMPORTANTE: Ruta corregida subiendo dos niveles (../../)
import { AuthService } from '../../services/auth.service'; 

import {
  IonContent,
  IonButton,
  IonInput,
  IonIcon
} from '@ionic/angular/standalone';

// Importamos los iconos y la función para registrarlos
import { addIcons } from 'ionicons';
import { person, lockClosed } from 'ionicons/icons';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController
  ) {
    // Registramos los iconos para poder usarlos en el HTML
    addIcons({ person, lockClosed });
  }

  ngOnInit() {}

  async login() {
    // 1. Validar que los campos no estén vacíos
    if (!this.email || !this.password) {
      this.mostrarMensaje('Por favor, ingresa tu correo y contraseña.', 'warning');
      return;
    }

    try {
      // 2. Intentar iniciar sesión con Firebase
      const userCredential = await this.authService.login(this.email, this.password);
      
      if (userCredential.user) {
        console.log('Login exitoso:', userCredential.user.email);
        this.mostrarMensaje('¡Bienvenido!', 'success');
        // 3. Redirigir a la página principal de la app
        this.router.navigate(['/componentes']); 
      }

    } catch (error: any) {
      // 4. Manejo de errores específicos de Firebase
      console.error('Error en login:', error);
      let mensaje = 'Error al iniciar sesión.';
      
      if (error.code === 'auth/invalid-email') mensaje = 'El formato del correo es incorrecto.';
      if (error.code === 'auth/user-not-found') mensaje = 'No existe una cuenta con este correo.';
      if (error.code === 'auth/wrong-password') mensaje = 'La contraseña es incorrecta.';
      if (error.code === 'auth/invalid-credential') mensaje = 'Credenciales inválidas.';

      this.mostrarMensaje(mensaje, 'danger');
    }
  }

  goToRegister() {
    // Asegúrate de tener esta ruta configurada en app.routes.ts
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    // Lógica futura para recuperar contraseña
    this.mostrarMensaje('Función de recuperar contraseña próximamente.', 'medium');
  }

  // Helper para mostrar mensajes (Toasts)
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