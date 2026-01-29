import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prototipo-basico',
  templateUrl: './prototipo-basico.page.html',
  styleUrls: ['./prototipo-basico.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class PrototipoBasicoPage implements AfterViewInit, OnDestroy {

  @ViewChild('threeContainer', { static: false }) threeContainer!: ElementRef;

  pasoActual = 0;
  pasos = [
    {
      categoria: '1. Preparación',
      titulo: 'Espacio de Trabajo',
      descripcion: 'Busca una superficie amplia, limpia y no conductora (madera es ideal). Reúne tu destornillador Philips (estrella) y saca todos los componentes de sus cajas.',
      nota: 'Toca una superficie metálica antes de empezar para descargar la estática de tu cuerpo.',
      color: 'medium'
    },
    {
      categoria: '2. Motherboard',
      titulo: 'Instalar el Procesador (CPU)',
      descripcion: 'Levanta la palanca del zócalo en la placa madre. Alinea el triángulo dorado del CPU con el del zócalo. Déjalo caer suavemente sin presionar y baja la palanca.',
      nota: '¡No toques los pines dorados del zócalo ni del procesador!',
      color: 'warning'
    },
    {
      categoria: '2. Motherboard',
      titulo: 'Memoria RAM',
      descripcion: 'Abre los seguros de las ranuras DIMM. Alinea la muesca de la memoria RAM con la de la ranura y presiona firme hasta escuchar un "clic".',
      nota: 'Si tienes 2 módulos, usa las ranuras 2 y 4 para activar el Dual Channel.',
      color: 'warning'
    },
    {
      categoria: '3. Gabinete',
      titulo: 'Preparar el Gabinete',
      descripcion: 'Instala la placa trasera (I/O Shield) si no viene integrada. Atornilla los soportes dorados (standoffs) en el gabinete según el tamaño de tu placa (ATX, Micro-ATX).',
      nota: 'Nunca atornilles la placa madre directo al metal sin los soportes dorados.',
      color: 'dark'
    },
    {
      categoria: '3. Gabinete',
      titulo: 'Montar la Placa Madre',
      descripcion: 'Introduce la placa madre con cuidado dentro del gabinete. Alinea los agujeros con los soportes dorados y atorníllala firmemente, pero sin apretar en exceso.',
      nota: '',
      color: 'success'
    },
    {
      categoria: '4. Energía',
      titulo: 'Fuente de Poder (PSU)',
      descripcion: 'Instala la fuente en la parte inferior (o superior) del gabinete. Asegúrate de que el ventilador de la fuente apunte hacia la rejilla de ventilación (generalmente hacia abajo).',
      nota: 'Pasa los cables principales hacia la parte trasera para ordenarlos luego.',
      color: 'danger'
    },
    {
      categoria: '5. Gráficos',
      titulo: 'Tarjeta Gráfica (GPU)',
      descripcion: 'Retira las tapas metálicas traseras del gabinete correspondientes al puerto PCIe x16 superior. Inserta la gráfica hasta oír el clic y atorníllala al gabinete.',
      nota: 'Esta es la pieza más pesada, asegúrate de que quede bien firme.',
      color: 'tertiary'
    },
    {
      categoria: '6. Conexiones',
      titulo: 'Cableado Principal',
      descripcion: 'Conecta el cable de 24 pines (placa), el de 8 pines (CPU, arriba a la izquierda) y los cables PCIe (6 u 8 pines) a tu tarjeta gráfica.',
      nota: '¡No olvides conectar el cable del ventilador del CPU (CPU_FAN)!',
      color: 'primary'
    },
    {
      categoria: '7. Final',
      titulo: 'Cerrar y Encender',
      descripcion: 'Revisa que no haya cables sueltos tocando ventiladores. Coloca las tapas del gabinete, conecta el monitor a la Tarjeta Gráfica (no a la placa) y enciende tu PC.',
      nota: '¡Felicidades! Has ensamblado tu computadora.',
      color: 'success'
    }
  ];

  private scene: any;
  private camera: any;
  private renderer: any;
  private animationId!: number;
  private gabinete: any;

constructor(private router: Router) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initThree();
      window.addEventListener('resize', this.onResize);
    }, 50);
  }

 cambiarPaso(delta: number) {
    const nuevo = this.pasoActual + delta;

    // Si el paso es válido, avanzamos
    if (nuevo >= 0 && nuevo < this.pasos.length) {
      this.pasoActual = nuevo;
    } 
    // SI EL USUARIO DA CLIC EN "FINALIZAR" (intenta ir más allá del último paso)
    else if (delta > 0 && nuevo >= this.pasos.length) {
      this.router.navigate(['/componentes']);
    }
  }

  private initThree() {
    const container = this.threeContainer.nativeElement;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xeef2f6);

    this.camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    this.camera.position.set(4, 3, 5);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(w, h);
    container.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 5, 5);
    this.scene.add(dirLight);

    const loader = new GLTFLoader();
    
    (loader as any).load('assets/prototipo-basico.glb', (gltf: any) => {
      this.gabinete = gltf.scene;
      this.gabinete.scale.set(0.02, 0.02, 0.02); // Mantenemos tu escala pequeña
      this.gabinete.position.set(0, 0, 0); 
      this.scene.add(this.gabinete);
    }, undefined, (err: any) => console.error('Error carga 3D:', err));

    this.animate();
  }

  // --- AQUÍ AGREGAMOS LA ROTACIÓN ---
  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    
    // Si el modelo ya cargó, lo hacemos girar sobre su eje Y
    if (this.gabinete) {
      this.gabinete.rotation.y += 0.005; // Ajusta la velocidad cambiando este número
    }
    
    this.renderer.render(this.scene, this.camera);
  }

  private onResize = () => {
    if (!this.threeContainer) return;
    const container = this.threeContainer.nativeElement;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
    cancelAnimationFrame(this.animationId);
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    }
  }
}