import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-prototipo-intermedio',
  templateUrl: './prototipo-intermedio.page.html',
  styleUrls: ['./prototipo-intermedio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PrototipoIntermedioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
