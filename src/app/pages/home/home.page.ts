import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard
  ]
})
export class HomePage {
  @ViewChild('homeWrapper') homeWrapper!: ElementRef<HTMLElement>;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // valores por defecto: fondo y opacidad
    // Usa la imagen que colocaste en src/assets/fondohome.jpg
      this.setBackgroundImage('assets/fondohome.jpg', 0.6);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  /**
   * Establece la imagen de fondo (ruta relativa a `src/` como `assets/mi.jpg`).
   * @param path ruta de la imagen (por ejemplo 'assets/home-bg.jpg')
   * @param opacity opacidad del overlay entre 0 y 1 (opcional)
   */
  setBackgroundImage(path: string, opacity?: number) {
    if (!this.homeWrapper) return;
    const el = this.homeWrapper.nativeElement;
    const url = path ? `url('${path}')` : 'none';
    el.style.setProperty('--bg-image', url);
    if (opacity != null) this.setOverlayOpacity(opacity);
  }

  /** Ajusta la opacidad del overlay (no del elemento .home-box). */
  setOverlayOpacity(opacity: number) {
    if (!this.homeWrapper) return;
    const clamped = Math.max(0, Math.min(1, opacity));
    this.homeWrapper.nativeElement.style.setProperty('--overlay-opacity', String(clamped));
  }
}
