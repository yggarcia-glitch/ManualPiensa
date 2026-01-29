import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

interface Servicio {
  nombre: string;
  icon: string;
  descripcion: string;
  precio: string;
}

interface MiembroEquipo {
  nombre: string;
  puesto: string;
  especialidad: string;
  icon: string;
}

@Component({
  selector: 'app-razon-social',
  templateUrl: './razon-social.page.html',
  styleUrls: ['./razon-social.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, CommonModule]
})
export class RazonSocialPage implements OnInit {

  @ViewChild('contactoSection') contactoSection!: ElementRef;

  servicios: Servicio[] = [
    {
      nombre: 'Diagnóstico de Hardware',
      icon: 'hardware-chip',
      descripcion: 'Análisis completo de componentes y detección de problemas',
      precio: '$25 - $50'
    },
    {
      nombre: 'Limpieza y Mantenimiento',
      icon: 'sparkles',
      descripcion: 'Limpieza profunda de polvo y aplicación de pasta térmica',
      precio: '$30 - $60'
    },
    {
      nombre: 'Cambio de Componentes',
      icon: 'swap-vertical',
      descripcion: 'Reemplazo de RAM, SSD, disco duro y otros componentes',
      precio: '$50 - $200'
    },
    {
      nombre: 'Recuperación de Datos',
      icon: 'shield-half',
      descripcion: 'Rescate y recuperación de información importante',
      precio: '$75 - $150'
    },
    {
      nombre: 'Instalación de SO',
      icon: 'code-working',
      descripcion: 'Instalación y configuración de sistemas operativos',
      precio: '$40 - $80'
    },
    {
      nombre: 'Optimización de Sistema',
      icon: 'speedometer',
      descripcion: 'Mejora de rendimiento y eliminación de malware',
      precio: '$35 - $70'
    }
  ];

  equipo: MiembroEquipo[] = [
    {
      nombre: 'Yosef Garcia',
      puesto: 'Gerente Técnico',
      especialidad: 'Especialista en Hardware y Diagnóstico',
      icon: 'assets/yosep.jpg'
    },
    {
      nombre: 'Felipe Molina',
      puesto: 'Técnico Senior',
      especialidad: 'Recuperación de Datos y Soluciones Software',
      icon: 'assets/felipao.jpg'
    },
    {
      nombre: 'Jonnathan Villa',
      puesto: 'Técnico',
      especialidad: 'Mantenimiento y Actualizaciones',
      icon: 'assets/jonna.jpg'
    }
  ];

  formulario = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  };

  constructor() { }

  ngOnInit() {
  }

  scrollToContacto() {
    this.contactoSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


  resetFormulario() {
    this.formulario = {
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    };
  }

}
