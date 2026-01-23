import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-razon-social',
  templateUrl: './razon-social.page.html',
  styleUrls: ['./razon-social.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RazonSocialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
