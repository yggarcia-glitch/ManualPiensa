import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-impresion3d',
  templateUrl: './impresion3d.page.html',
  styleUrls: ['./impresion3d.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Impresion3dPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
