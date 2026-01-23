import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-historia-computacion',
  templateUrl: './historia-computacion.page.html',
  styleUrls: ['./historia-computacion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistoriaComputacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
