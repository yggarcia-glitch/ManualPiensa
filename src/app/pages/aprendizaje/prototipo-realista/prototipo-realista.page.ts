import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-prototipo-realista',
  templateUrl: './prototipo-realista.page.html',
  styleUrls: ['./prototipo-realista.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PrototipoRealistaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
