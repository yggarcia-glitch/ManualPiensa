import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, IonicModule]
})
export class CreditosPage implements OnInit {

  // 1. Modelos Específicos (MakerWorld)
  modelos3D = [
    {
      titulo: 'Prototipo Básico',
      nombreModelo: 'Gaming PC Kit Card',
      autor: 'Perfil ID: 246413',
      url: 'https://makerworld.com/es/models/228869-gaming-pc-kit-card#profileId-246413',
      icono: 'cube-outline'
    },
    {
      titulo: 'Prototipo Intermedio',
      nombreModelo: 'Mini PC with fitted parts',
      autor: 'Perfil ID: 991166',
      url: 'https://makerworld.com/es/models/1011670-mini-pc-with-fitted-parts#profileId-991166',
      icono: 'construct-outline'
    },
    {
      titulo: 'Prototipo Avanzado',
      nombreModelo: 'Fully Gaming Computer',
      autor: 'Perfil ID: 1806177',
      url: 'https://makerworld.com/es/models/1220519-fully-gaming-computer-with-interchangable-parts#profileId-1806177',
      icono: 'rocket-outline'
    }
  ];

  // 2. Recursos Gráficos y Visuales (NUEVO)
  recursosGraficos = [
    {
      nombre: 'Sketchfab',
      desc: 'Repositorio de modelos y referencias 3D.',
      url: 'https://sketchfab.com/search?type=models',
      icono: 'images-outline'
    },
    {
      nombre: 'Flaticon',
      desc: 'Iconos vectoriales y gráficos planos.',
      url: 'https://www.flaticon.es',
      icono: 'shapes-outline'
    }
  ];

  // 3. Tecnologías de Desarrollo
  tecnologias = [
    {
      nombre: 'Three.js',
      desc: 'Biblioteca 3D para la visualización web.',
      url: 'https://threejs.org/'
    },
    {
      nombre: 'Ionic & Angular',
      desc: 'Framework para el desarrollo de la aplicación.',
      url: 'https://ionicframework.com/'
    },
    {
      nombre: 'Wikipedia',
      desc: 'Referencias históricas de la informática.',
      url: 'https://es.wikipedia.org/wiki/Historia_de_la_inform%C3%A1tica'
    }
  ];

  // 4. Asistencia de Inteligencia Artificial (NUEVO)
  asistenciaIA = [
    {
      nombre: 'Gemini',
      desc: 'Asistencia en lógica de programación y desarrollo.',
      url: 'https://gemini.google.com/',
      rol: 'Co-Pilot'
    },
    {
      nombre: 'ChatGPT',
      desc: 'Apoyo en redacción, estructura y documentación.',
      url: 'https://chat.openai.com/',
      rol: 'Asistente'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}