import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonModal, IonButtons, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

interface Componente {
  id: number;
  nombre: string;
  icon: string;
  descripcion: string;
  categoria: string;
  funcion: string;
  problemas: string[];
  soluciones: string[];
}

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonModal, IonButtons, IonButton, IonList, IonItem, IonLabel, CommonModule, FormsModule]
})
export class ComponentesPage implements OnInit {

  componentes: Componente[] = [
    {
      id: 1,
      nombre: 'Procesador (CPU)',
      icon: 'hardware-chip',
      descripcion: 'Cerebro de la computadora',
      categoria: 'Hardware Crítico',
      funcion: 'Ejecuta todas las instrucciones y realiza los cálculos del sistema',
      problemas: ['Sobrecalentamiento', 'Bajo rendimiento', 'Fallos frecuentes'],
      soluciones: ['Limpiar ventilador', 'Cambiar pasta térmica', 'Mejorar ventilación']
    },
    {
      id: 2,
      nombre: 'Memoria RAM',
      icon: 'server',
      descripcion: 'Memoria volátil de acceso rápido',
      categoria: 'Memoria',
      funcion: 'Almacena datos temporales durante la ejecución de programas',
      problemas: ['Pantalla azul', 'Congelamiento', 'Pérdida de datos'],
      soluciones: ['Reinstalar módulos', 'Limpiar contactos', 'Reemplazar módulo defectuoso']
    },
    {
      id: 3,
      nombre: 'Disco Duro / SSD',
      icon: 'save',
      descripcion: 'Almacenamiento permanente',
      categoria: 'Almacenamiento',
      funcion: 'Almacena archivos, aplicaciones y sistema operativo',
      problemas: ['Clics extraños', 'Lentitud extrema', 'Errores de lectura'],
      soluciones: ['Ejecutar CHKDSK', 'Desfragmentar', 'Reemplazar si está dañado']
    },
    {
      id: 4,
      nombre: 'Placa Base',
      icon: 'grid',
      descripcion: 'Conecta todos los componentes',
      categoria: 'Hardware Crítico',
      funcion: 'Proporciona comunicación entre todos los componentes del sistema',
      problemas: ['No enciende', 'Puertos dañados', 'Corrosión'],
      soluciones: ['Verificar conexiones', 'Reemplazar batería CMOS', 'Reparación de puerto']
    },
    {
      id: 5,
      nombre: 'Fuente de Poder',
      icon: 'flash',
      descripcion: 'Suministra energía al sistema',
      categoria: 'Energía',
      funcion: 'Convierte corriente alterna en corriente continua para los componentes',
      problemas: ['No enciende', 'Apagones inesperados', 'Ruido anormal'],
      soluciones: ['Verificar conexión de cables', 'Reemplazar fuente', 'Limpiar ventilador']
    },
    {
      id: 6,
      nombre: 'Tarjeta Gráfica',
      icon: 'image',
      descripcion: 'Procesamiento de gráficos',
      categoria: 'Periféricos',
      funcion: 'Procesa gráficos y video para mostrar en el monitor',
      problemas: ['Pantalla negra', 'Artefactos visuales', 'Juegos lentos'],
      soluciones: ['Actualizar drivers', 'Limpiar ventilador', 'Reemplazar tarjeta']
    },
    {
      id: 7,
      nombre: 'Ventilador',
      icon: 'leaf',
      descripcion: 'Sistema de enfriamiento',
      categoria: 'Refrigeración',
      funcion: 'Disipa el calor generado por los componentes',
      problemas: ['Ruido excesivo', 'No gira', 'Polvo acumulado'],
      soluciones: ['Limpiar aspas', 'Lubricar rodamientos', 'Reemplazar ventilador']
    },
    {
      id: 8,
      nombre: 'Batería',
      icon: 'battery-full',
      descripcion: 'Energía para laptops',
      categoria: 'Energía',
      funcion: 'Proporciona energía portátil a laptops y dispositivos móviles',
      problemas: ['Carga rápida', 'No retiene carga', 'Batería inflada'],
      soluciones: ['Calibrar batería', 'Reemplazar batería', 'Usar cargador certificado']
    }
  ];

  modalOpen = false;
  componenteSeleccionado: Componente | null = null;

  constructor() { }

  ngOnInit() {
  }

  selectComponente(componente: Componente) {
    this.componenteSeleccionado = componente;
    this.modalOpen = true;
  }

  cerrarModal() {
    this.modalOpen = false;
    this.componenteSeleccionado = null;
  }

}
