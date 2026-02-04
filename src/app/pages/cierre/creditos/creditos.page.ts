import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router'; // Agregamos Router

// --- IMPORTS PARA EL LOGOUT ---
import { AuthService } from '../../../services/auth.service';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, IonicModule]
})
export class CreditosPage implements OnInit {

  // 1. MODELOS 3D (Descargas)
  modelos3D = [
    {
      id: 'nivel1',
      titulo: 'Prototipo Básico',
      subtitulo: 'Gaming PC Kit Card',
      descripcion: 'Modelo plano tipo tarjeta. Ideal para impresión rápida sin soportes.',
      tiempo: '~2h 30m',
      url: 'https://makerworld.com/es/models/228869-gaming-pc-kit-card#profileId-246413',
      icono: 'assets/icon/bebe.png', 
      color: 'teal'
    },
    {
      id: 'nivel2',
      titulo: 'Prototipo Intermedio',
      subtitulo: 'Mini PC Modular',
      descripcion: 'Gabinete con piezas encajables. Requiere buena calibración de flujo.',
      tiempo: '~5h 15m',
      url: 'https://makerworld.com/es/models/1011670-mini-pc-with-fitted-parts#profileId-991166',
      icono: 'assets/icon/nerd.png',
      color: 'blue'
    },
    {
      id: 'nivel3',
      titulo: 'Prototipo Avanzado',
      subtitulo: 'Full Gaming Tower',
      descripcion: 'Modelo complejo con partes intercambiables y simulación de refrigeración.',
      tiempo: '~12h+',
      url: 'https://makerworld.com/es/models/1220519-fully-gaming-computer-with-interchangable-parts#profileId-1806177',
      icono: 'assets/icon/gafas-de-sol.png',
      color: 'dark'
    }
  ];

  // 2. FUENTES DE RECURSOS
  fuentesRecursos = [
    { 
      nombre: 'MakerWorld', 
      uso: 'Repositorio de Modelos 3D', 
      url: 'https://makerworld.com/',
      imagen: 'assets/icon/markerworld.png' 
    },
    { 
      nombre: 'Sketchfab', 
      uso: 'Referencias visuales y modelos', 
      url: 'https://sketchfab.com/',
      imagen: 'assets/icon/sketchfab.png' 
    },
    { 
      nombre: 'Flaticon', 
      uso: 'Iconos vectoriales y Emojis', 
      url: 'https://www.flaticon.es',
      imagen: 'assets/icon/flaticon.png' 
    }
  ];

  // 3. TECNOLOGÍAS USADAS
  tecnologias = [
    { nombre: 'Ionic Framework', url: 'https://ionicframework.com/', iconName: 'logo-ionic', color: '#3880ff' },
    { nombre: 'Angular', url: 'https://angular.io/', iconName: 'logo-angular', color: '#dd0031' },
    { nombre: 'Three.js', url: 'https://threejs.org/', iconName: 'cube-outline', color: '#000000' },
    { nombre: 'Wikipedia', url: 'https://es.wikipedia.org/', iconName: 'globe-outline', color: '#5f6368' }
  ];


  // --- CONSTRUCTOR CON AUTH ---
  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    // Registramos el icono de salida
    addIcons({ logOutOutline });
  }

  ngOnInit() { }

  // --- FUNCIÓN LOGOUT ---
  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/inicio']);
    } catch (error) {
      console.error('Error al salir:', error);
    }
  }
}