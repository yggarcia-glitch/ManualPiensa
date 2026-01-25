import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-historia-computacion',
  templateUrl: './historia-computacion.page.html',
  styleUrls: ['./historia-computacion.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton
  ]
})
export class HistoriaComputacionPage implements OnInit {

  eventos = [
    {
      anio: '1940s',
      titulo: 'ENIAC',
      descripcion: 'El ENIAC fue la primera computadora electrónica de propósito general. Era enorme, ocupaba varias habitaciones y revolucionó la forma de calcular, permitiendo realizar operaciones matemáticas complejas en segundos, algo imposible para los humanos en aquella época.',
      img: 'assets/1940s.png',
      expanded: false
    },
    {
      anio: '1970s',
      titulo: 'Microprocesador',
      descripcion: 'El microprocesador permitió integrar toda la unidad central de procesamiento en un solo chip. Esto hizo posible que las computadoras fueran más pequeñas, más rápidas y más accesibles, marcando el inicio de la era de la informática moderna.',
      img: 'assets/1970s.png',
      expanded: false
    },
    {
      anio: '1981',
      titulo: 'IBM PC',
      descripcion: 'IBM lanzó su primera computadora personal, el IBM PC, que se convirtió en un estándar en la industria. Esto permitió que las computadoras llegaran a oficinas y hogares, cambiando la manera de trabajar y estudiar en todo el mundo.',
      img: 'assets/1981.png',
      expanded: false
    },
    {
      anio: '1990s',
      titulo: 'Internet',
      descripcion: 'La popularización de Internet permitió conectar computadoras a nivel global. La información se compartía de manera instantánea, surgiendo nuevas formas de comunicación, comercio y educación, transformando completamente la sociedad.',
      img: 'assets/1990s.png',
      expanded: false
    },
    {
      anio: '2000s',
      titulo: 'Laptops',
      descripcion: 'Las computadoras portátiles o laptops hicieron que la computación fuera móvil. Era posible trabajar, estudiar o divertirse desde cualquier lugar, haciendo más flexible el uso de la tecnología en la vida cotidiana.',
      img: 'assets/2000s.png',
      expanded: false
    },
    {
      anio: '2010s',
      titulo: 'Smartphones',
      descripcion: 'Los teléfonos inteligentes trajeron la computación al bolsillo de millones de personas. Con ellos se podía navegar por Internet, comunicarse, jugar, aprender y trabajar en cualquier lugar, acelerando la digitalización global.',
      img: 'assets/2010s.png',
      expanded: false
    },
    {
      anio: 'Actualidad',
      titulo: 'IA y Cloud',
      descripcion: 'Hoy la Inteligencia Artificial y la computación en la nube permiten procesar grandes cantidades de datos y ejecutar tareas inteligentes. Esto ha transformado la forma en que trabajamos, aprendemos y tomamos decisiones, haciendo la computación más poderosa y accesible que nunca.',
      img: 'assets/actualidad.png',
      expanded: false
    }
  ];

  constructor() { }

  ngOnInit() { }

}
