import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForward } from 'ionicons/icons';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class InicioPage implements AfterViewInit, OnDestroy {

  // AHORA TENEMOS DOS REFERENCIAS
  @ViewChild('printerCanvas', { static: false }) printerCanvas!: ElementRef;
  @ViewChild('pcCanvas', { static: false }) pcCanvas!: ElementRef;

  // SISTEMA 1: IMPRESORA (IZQUIERDA)
  private scene1: any;
  private camera1: any;
  private renderer1: any;
  private modelPrinter: any;

  // SISTEMA 2: PC (DERECHA)
  private scene2: any;
  private camera2: any;
  private renderer2: any;
  private modelPC: any;

  private animationId: any;

  constructor(private router: Router) {
    addIcons({ arrowForward });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initPrinterSystem();
      this.initPCSystem();
      this.animate();
    }, 100);
  }

  ngOnDestroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    
    // Limpiar Renderer 1
    if (this.renderer1) {
      this.renderer1.dispose();
      this.renderer1.forceContextLoss();
    }
    // Limpiar Renderer 2
    if (this.renderer2) {
      this.renderer2.dispose();
      this.renderer2.forceContextLoss();
    }
  }

  // Detectar cambios de tamaño para AMBOS lienzos
  @HostListener('window:resize')
  onResize() {
    this.resizeRenderer(this.renderer1, this.camera1, this.printerCanvas);
    this.resizeRenderer(this.renderer2, this.camera2, this.pcCanvas);
  }

  resizeRenderer(renderer: any, camera: any, containerRef: ElementRef) {
    if (!renderer || !camera || !containerRef) return;
    const container = containerRef.nativeElement;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  // --- SISTEMA 1: IMPRESORA ---
  initPrinterSystem() {
    const container = this.printerCanvas.nativeElement;
    const w = container.clientWidth;
    const h = container.clientHeight;

    this.scene1 = new THREE.Scene();
    this.camera1 = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    this.camera1.position.set(0, 2, 6); // Posición centrada en SU caja

    this.renderer1 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer1.setSize(w, h);
    container.appendChild(this.renderer1.domElement);

    // Luces
    this.scene1.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dl = new THREE.DirectionalLight(0xffffff, 2);
    dl.position.set(5, 5, 5);
    this.scene1.add(dl);

    // Cargar Modelo
    const loader = new GLTFLoader();
    (loader as any).load('assets/impresora.glb', (gltf: any) => {
      this.modelPrinter = gltf.scene;
      // Centramos el objeto en SU propio mundo (0,0,0)
      this.modelPrinter.position.set(0, 0.5, 0); 
      this.modelPrinter.scale.set(0.06, 0.06, 0.06); 
      this.scene1.add(this.modelPrinter);
    });
  }

  // --- SISTEMA 2: PC ---
  initPCSystem() {
    const container = this.pcCanvas.nativeElement;
    const w = container.clientWidth;
    const h = container.clientHeight;

    this.scene2 = new THREE.Scene();
    this.camera2 = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    this.camera2.position.set(0, 2, 6); // Posición centrada en SU caja

    this.renderer2 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer2.setSize(w, h);
    container.appendChild(this.renderer2.domElement);

    // Luces
    this.scene2.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dl = new THREE.DirectionalLight(0xffffff, 2);
    dl.position.set(-5, 5, 5); // Luz desde el otro lado para variedad
    this.scene2.add(dl);

    // Cargar Modelo
    const loader = new GLTFLoader();
    (loader as any).load('assets/prototipo-intermedio.glb', (gltf: any) => {
      this.modelPC = gltf.scene;
      // Centramos el objeto en SU propio mundo (0,0,0)
      this.modelPC.position.set(0, 2.18, 0);
      this.modelPC.scale.set(0.0035, 0.0035, 0.0035);
      this.scene2.add(this.modelPC);
    });
  }

  // --- BUCLE DE ANIMACIÓN UNIFICADO ---
  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);

    // Rotar Impresora
    if (this.modelPrinter) {
      this.modelPrinter.rotation.y += 0.004;
    }
    // Renderizar Escena 1
    if (this.renderer1 && this.scene1 && this.camera1) {
      this.renderer1.render(this.scene1, this.camera1);
    }

    // Rotar PC
    if (this.modelPC) {
      this.modelPC.rotation.y -= 0.004; // Gira al otro lado
    }
    // Renderizar Escena 2
    if (this.renderer2 && this.scene2 && this.camera2) {
      this.renderer2.render(this.scene2, this.camera2);
    }
  };

  irARegistro() { this.router.navigate(['/register']); }
  irALogin() { this.router.navigate(['/login']); }
}