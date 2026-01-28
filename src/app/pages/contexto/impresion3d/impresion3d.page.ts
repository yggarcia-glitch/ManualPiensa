import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
@Component({
  selector: 'app-impresion3d',
  templateUrl: './impresion3d.page.html',
  styleUrls: ['./impresion3d.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon
  ]
})
export class Impresion3dPage implements AfterViewInit, OnDestroy {

  @ViewChild('threeContainer', { static: false })
  threeContainer!: ElementRef<HTMLDivElement>;

  tituloPagina: string = 'Impresión 3D';

  evolucionImpresion3D = [
   {
      anio: '1984',
      titulo: 'Origen',
      descripcion:
        'En 1984, Chuck Hull desarrolló la estereolitografía (SLA), una técnica que permitía crear objetos sólidos capa por capa usando resina líquida y luz ultravioleta. Este invento marcó el nacimiento de la impresión 3D, ya que por primera vez se podía transformar un diseño digital en un objeto físico de forma automática. Al inicio, esta tecnología era costosa y solo estaba disponible para empresas grandes y centros de investigación.',
      imagen: 'assets/1984imp3d.jpg'
    },
    {
      anio: '1990',
      titulo: 'Uso industrial',
      descripcion:
        'Durante la década de los 90, la impresión 3D comenzó a utilizarse principalmente en la industria, sobre todo para el prototipado rápido. Las empresas podían crear modelos físicos de piezas antes de fabricarlas en masa, lo que reducía costos, tiempo y errores en el diseño. Aunque era muy útil, seguía siendo una tecnología cerrada, cara y poco accesible para el público general.',
      imagen: 'assets/1990imp3d.png'
    },
    {
      anio: '2005',
      titulo: 'Proyecto RepRap',
      descripcion:
        'En 2005 surge el proyecto RepRap, una iniciativa de código abierto que buscaba crear impresoras 3D capaces de replicar sus propias piezas. Gracias a este proyecto, la impresión 3D se volvió mucho más accesible, permitiendo que estudiantes, aficionados y pequeños negocios pudieran construir y modificar sus propias impresoras. Este momento fue clave para la popularización de la impresión 3D a nivel mundial.',
      imagen: 'assets/2005imp3d.jpg'
    },
    {
      anio: 'Actualidad',
      titulo: 'Expansión',
      descripcion:
        'Hoy en día, la impresión 3D se utiliza en múltiples áreas como medicina, educación, arquitectura, ingeniería y uso doméstico. Se fabrican prótesis personalizadas, maquetas, piezas mecánicas, herramientas y objetos cotidianos. Además, los costos han disminuido considerablemente y la tecnología continúa evolucionando, permitiendo impresiones más rápidas, precisas y con nuevos materiales.',
      imagen: 'assets/actualidadimp3d.jpg'
    }
  ];

  // THREE
   // MANTENEMOS TUS TYPES "ANY"
  private scene: any;
  private camera: any;
  private renderer: any;
  
  // Cambiamos "cube" por "model" o "printer"
  private printer: any; 
  private animationId!: number;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initThree();
      window.addEventListener('resize', this.onResize);
    }, 50);
  }

  private initThree() {
    const container = this.threeContainer.nativeElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    this.scene = new THREE.Scene();
    
    // Ajustamos la cámara un poco más lejos para que quepa la impresora
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 1, 4); // X, Y, Z (Un poco arriba y atrás)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 0); 
    container.appendChild(this.renderer.domElement);

    // --- LUCES (Vital para modelos 3D reales) ---
    // Luz ambiental (ilumina todo suavemente)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); 
    this.scene.add(ambientLight);

    // Luz direccional (como el sol, da sombras y volumen)
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 10, 7);
    this.scene.add(dirLight);


// --- CARGAR EL MODELO GLB ---
    const loader = new GLTFLoader();

    // TRUCO: Ponemos '(loader as any)' para que TypeScript deje de molestar
    // con los tipos de los argumentos.
    (loader as any).load(
      'assets/impresora.glb',
      (gltf: any) => {
        // 1. ÉXITO
        this.printer = gltf.scene;
        
        // Ajustes opcionales de posición/escala
        this.printer.position.y = -0.1; 
        // this.printer.scale.set(0.5, 0.5, 0.5); 
        this.printer.scale.set(0.05, 0.05, 0.05);

        this.scene.add(this.printer);
      },
      undefined, // 2. PROGRESO (Lo dejamos undefined y 'as any' lo aceptará)
      (error: any) => {
        // 3. ERROR
        console.error('Error cargando el modelo:', error);
      }
    );
    this.animate();
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    
    // Solo rotamos si el modelo ya cargó
    if (this.printer) {
      this.printer.rotation.y += 0.005; // Rotación suave
    }
    
    this.renderer.render(this.scene, this.camera);
  };

  private onResize = () => {
    if (!this.threeContainer) return;
    const container = this.threeContainer.nativeElement;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    cancelAnimationFrame(this.animationId);
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    }
  }
}