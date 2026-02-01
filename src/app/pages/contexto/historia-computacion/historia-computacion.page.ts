import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-historia-computacion',
  templateUrl: './historia-computacion.page.html',
  styleUrls: ['./historia-computacion.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    CommonModule,
    RouterModule // 👈 NECESARIO para routerLink en la navbar
  ],
})
export class HistoriaComputacionPage {

  eventos = [
    {
      fecha: '1946',
      titulo: 'ENIAC: El inicio de la computación electrónica',
      resumen: 'Primera computadora electrónica de propósito general.',
      detalle: 'El ENIAC (Electronic Numerical Integrator and Computer) es considerado la primera computadora electrónica de propósito general. Fue desarrollado para realizar cálculos balísticos para el ejército de los Estados Unidos durante la Segunda Guerra Mundial. Su importancia radica en que abandonó completamente los sistemas mecánicos y electromecánicos, utilizando tubos de vacío para procesar información de manera electrónica.Aunque era extremadamente grande, costoso y consumía enormes cantidades de energía, el ENIAC demostró que la computación electrónica era viable y marcó el inicio de una nueva era tecnológica. Además, introdujo conceptos fundamentales como la programación mediante configuración física del hardware.',
      imagen: 'assets/imagenes/eniac.jpg',
      abierto: false
    },
    {
      fecha: '1958',
      titulo: 'Circuitos Integrados',
      resumen: 'Se integran varios transistores en un solo chip.',
      detalle: 'En 1958 se desarrollaron los primeros circuitos integrados, permitiendo integrar múltiples componentes electrónicos en un solo chip. Este avance redujo drásticamente el tamaño, costo y consumo energético de los sistemas computacionales. Gracias a los circuitos integrados, la computación comenzó un proceso de miniaturización que haría posible el desarrollo de equipos más compactos y eficientes. Este principio es clave para la fabricación digital actual, donde la precisión y la integración tecnológica son fundamentales.',
      imagen: 'assets/imagenes/ciercuito-integrado.jpg',
      abierto: false
    },
    {
      fecha: '1971',
      titulo: 'El microprocesador: Computación en un solo chip',
      resumen: 'Intel lanza el primer microprocesador comercial.',
      detalle: 'La invención del microprocesador permitió integrar la unidad central de procesamiento dentro de un solo circuito integrado. Este hito redujo drásticamente el tamaño, costo y consumo energético de las computadoras. Gracias a este avance, la computación dejó de ser exclusiva de grandes instituciones y comenzó a democratizarse. La miniaturización del hardware es un principio clave que más adelante permitiría la integración de sistemas computacionales en dispositivos de fabricación digital, como impresoras 3D y controladores electrónicos.',
      imagen: 'assets/imagenes/microprocesador.jpg',
      abierto: false
    },
    {
      fecha: '1981',
      titulo: 'IBM PC: La estandarización de la computadora personal',
      resumen: 'Nacimiento de la computadora personal.',
      detalle: 'El lanzamiento del IBM PC estableció un estándar abierto que impulsó el crecimiento del mercado de computadoras personales. Esto facilitó el desarrollo de software compatible y aceleró la adopción de computadoras en hogares, oficinas y centros educativos. La masificación de la computación personal fue crucial para el surgimiento de herramientas de diseño asistido por computadora (CAD), fundamentales para la creación de modelos digitales utilizados hoy en impresión 3D.',
      imagen: 'assets/imagenes/ibmpc.jpg',
      abierto: false
    },
    {
      fecha: '1991',
      titulo: 'Software y sistemas abiertos',
      resumen: 'Internet se vuelve accesible al público.',
      detalle: 'En 1991 se popularizaron los sistemas operativos y el software de código abierto, fomentando la colaboración y la innovación tecnológica. Este modelo permitió que comunidades de desarrolladores contribuyeran al avance del software de diseño, control y simulación. En el ámbito de la impresión 3D, el código abierto impulsó el desarrollo de firmware, slicers y diseños accesibles para educación y prototipado.',
      imagen: 'assets/imagenes/software-libre.jpg',
      abierto: false 
    },
    {
      fecha: '2007',
      titulo: 'Computación móvil',
      resumen: 'La computación se vuelve móvil.',
      detalle: 'La aparición de los smartphones revolucionó la forma en que las personas interactúan con la tecnología. La computación se volvió portátil, táctil y siempre conectada. Este cambio impulsó el desarrollo de interfaces más intuitivas y accesibles, principios que hoy se aplican en el control y monitoreo de impresoras 3D mediante aplicaciones móviles y paneles táctiles.',
      imagen: 'assets/imagenes/computacion-movil.jpg',
      abierto: false
    },
    {
      fecha: '2010',
      titulo: 'Computación en la Nube',
      resumen: 'Datos y servicios en internet.',
      detalle: 'A partir de 2010, la computación en la nube se consolidó como un modelo que permite almacenar, procesar y acceder a información a través de internet sin depender de un equipo físico específico. Este avance facilitó el trabajo colaborativo, el respaldo de datos y el uso de software especializado desde cualquier lugar. En el ámbito de la impresión 3D, la nube permite guardar diseños, compartir modelos, procesar archivos y controlar flujos de trabajo de manera remota, optimizando tiempos y recursos en entornos educativos y productivos.',
      imagen: 'assets/imagenes/nube.jpg',
      abierto: false
    },
    {
      fecha: '2020',
      titulo: 'Computación avanzada e inteligencia artificial',
      resumen: 'IA integrada en la vida diaria.',
      detalle: 'Desde 2020, la integración de inteligencia artificial, simulación y computación en la nube ha optimizado los procesos de diseño y fabricación. En impresión 3D, estas tecnologías permiten analizar estructuras, optimizar materiales y automatizar flujos de trabajo. La computación moderna ya no solo ejecuta instrucciones, sino que toma decisiones para mejorar eficiencia y calidad.',
      imagen: 'assets/imagenes/ia.jpg',
      abierto: false
    }
  ];

  toggleEvento(evento: any) {
    evento.abierto = !evento.abierto;
  }
}

