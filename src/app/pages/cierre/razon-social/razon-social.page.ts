import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-razon-social',
  templateUrl: './razon-social.page.html',
  styleUrls: ['./razon-social.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class RazonSocialPage implements OnInit {

  // 1. INFORMACIÓN DEL PROYECTO (Basado en el PDF)
  proyecto = {
    titulo: 'ManualPiensa',
    subtitulo: 'Sistema Web Educativo de Ensamblaje Computacional',
    // Resumen extraído del PDF
    resumen: 'El presente proyecto tiene como finalidad desarrollar una herramienta educativa que integre un simulador interactivo y un prototipo físico impreso en 3D. Buscamos solucionar el desconocimiento sobre la estructura interna de las computadoras mediante un aprendizaje práctico y seguro.',
    institucion: 'Universidad [Nombre de tu Uni]', 
    periodo: '2025 - 2026'
  };

  // 2. PILARES METODOLÓGICOS (Con tus nuevos iconos PNG)
  pilares = [
    { 
      titulo: 'Aprendizaje Seguro', 
      desc: 'Entorno de simulación libre de riesgos para los componentes.', 
      icono: 'assets/icon/proteger.png' // Icono: proteger
    },
    { 
      titulo: 'Interactividad', 
      desc: 'Manipulación directa con retroalimentación visual y auditiva.', 
      icono: 'assets/icon/interactivo.png' // Icono: interactivo
    },
    { 
      titulo: 'Innovación', 
      desc: 'Integración de impresión 3D como recurso didáctico tangible.', 
      icono: 'assets/icon/idea.png' // Icono: idea
    }
  ];

  // 3. COMPONENTES DEL SISTEMA (Basado en la Propuesta del PDF)
  modulos = [
    { 
      nombre: 'Simulador Web', 
      desc: 'Guía visual paso a paso del orden correcto de montaje.', 
      icono: 'desktop-outline' 
    },
    { 
      nombre: 'Prototipo Físico 3D', 
      desc: 'Modelo a escala para la práctica manipulativa real.', 
      icono: 'cube-outline' 
    },
    { 
      nombre: 'Contexto Histórico', 
      desc: 'Información sobre la evolución de la computación.', 
      icono: 'book-outline' 
    }
  ];

  // 4. EQUIPO DE DESARROLLO (Tus datos intactos)
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

  constructor() { }

  ngOnInit() { }
}