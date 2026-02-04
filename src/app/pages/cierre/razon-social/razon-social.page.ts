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
  selector: 'app-razon-social',
  templateUrl: './razon-social.page.html',
  styleUrls: ['./razon-social.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class RazonSocialPage implements OnInit {

  // 1. INFORMACIÓN DEL PROYECTO
  proyecto = {
    titulo: 'ManualPiensa',
    subtitulo: 'Sistema Web Educativo de Ensamblaje Computacional',
    resumen: 'El presente proyecto tiene como finalidad desarrollar una herramienta educativa que integre un simulador interactivo y un prototipo físico impreso en 3D. Buscamos solucionar el desconocimiento sobre la estructura interna de las computadoras mediante un aprendizaje práctico y seguro.',
    institucion: 'Universidad [Nombre de tu Uni]', 
    periodo: '2025 - 2026'
  };

  // 2. PILARES METODOLÓGICOS
  pilares = [
    { 
      titulo: 'Aprendizaje Seguro', 
      desc: 'Entorno de simulación libre de riesgos para los componentes.', 
      icono: 'assets/icon/proteger.png'
    },
    { 
      titulo: 'Interactividad', 
      desc: 'Manipulación directa con retroalimentación visual y auditiva.', 
      icono: 'assets/icon/interactivo.png'
    },
    { 
      titulo: 'Innovación', 
      desc: 'Integración de impresión 3D como recurso didáctico tangible.', 
      icono: 'assets/icon/idea.png'
    }
  ];

  // 3. COMPONENTES DEL SISTEMA
  modulos = [
    { 
      nombre: 'Simulador Web', 
      desc: 'Guía visual paso a paso del orden correcto de montaje.', 
      icono: 'assets/icon/simulacion.png' 
    },
    { 
      nombre: 'Prototipo Físico 3D', 
      desc: 'Modelo a escala para la práctica manipulativa real.', 
      icono: 'assets/icon/prototipo.png' 
    },
    { 
      nombre: 'Contexto Histórico', 
      desc: 'Información sobre la evolución de la computación.', 
      icono: 'assets/icon/contexto.png' 
    }
  ];

  // 4. EQUIPO DE DESARROLLO
  equipo = [
    {
      nombre: 'Yosef Garcia',
      rol: 'Desarrollador & Hardware',
      foto: 'assets/yosep.jpg' 
    },
    {
      nombre: 'Felipe Molina',
      rol: 'Modelado 3D & Diseño',
      foto: 'assets/felipao.jpg'
    },
    {
      nombre: 'Jonnathan Villa',
      rol: 'Documentación & Investigación',
      foto: 'assets/jonna.jpg'
    }
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