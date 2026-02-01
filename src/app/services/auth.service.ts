import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService { // <--- ¡Esta clase es la que estamos importando!
  private auth = inject(Auth);

  constructor() { }

  // Login
  login(correo: string, contrasena: string) {
    return signInWithEmailAndPassword(this.auth, correo, contrasena);
  }

  // Registro (por si lo usas luego)
  register(correo: string, contrasena: string) {
    return createUserWithEmailAndPassword(this.auth, correo, contrasena);
  }

  // Salir
  logout() {
    return signOut(this.auth);
  }
}