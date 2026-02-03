import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prototipo-intermedio',
  templateUrl: './prototipo-intermedio.page.html',
  styleUrls: ['./prototipo-intermedio.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class PrototipoIntermedioPage implements AfterViewInit, OnDestroy {

  @ViewChild('threeContainer', { static: false }) threeContainer!: ElementRef;

  pasoActual = 0;
  evaluacionAbierta = false;

  readonly googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfZUehitLbFa_V2i-MfSquqOxTOU-GThvnVnVCVJFhqBAXUaA/viewform?usp=dialog';
  readonly googleFormEmbedUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfZUehitLbFa_V2i-MfSquqOxTOU-GThvnVnVCVJFhqBAXUaA/viewform?embedded=true';

  // --- GUÍA DETALLADA (NIVEL INTERMEDIO) ---
  pasos = [
    {
      fase: 'CPU - Prep',
      titulo: 'Apertura del Zócalo (Socket)',
      descripcion: 'Ubica la palanca de retención metálica al lado del zócalo del procesador. Presiónala suavemente hacia abajo y muévela hacia afuera para liberarla del gancho, luego levántala completamente hasta que quede vertical.',
      detalleTecnico: 'Socket type: LGA (Intel) o AM4/AM5 (AMD)',
      nota: 'No toques los pines del interior del zócalo bajo ninguna circunstancia. Son extremadamente frágiles.',
      color: 'dark'
    },
    {
      fase: 'CPU - Install',
      titulo: 'Alineación y Colocación',
      descripcion: 'Sostén el procesador por los bordes. Busca un pequeño triángulo dorado en una esquina del CPU y alinéalo con el triángulo grabado en el zócalo de la placa madre. Déjalo caer suavemente sin hacer presión.',
      detalleTecnico: 'Zero Insertion Force (ZIF)',
      nota: 'El CPU debe entrar solo por gravedad. Si tienes que empujar, está mal alineado.',
      color: 'warning'
    },
    {
      fase: 'CPU - Lock',
      titulo: 'Cierre del Mecanismo',
      descripcion: 'Baja la palanca de retención nuevamente. Sentirás resistencia; es normal. Empuja hasta engancharla bajo la pestaña de seguridad. La tapa plástica protectora saltará sola (en Intel).',
      detalleTecnico: 'Presión de anclaje: ~50-100 lbs',
      nota: 'Guarda la tapa plástica negra, la necesitarás si alguna vez aplicas la garantía.',
      color: 'warning'
    },
    {
      fase: 'Cooling',
      titulo: 'Pasta Térmica',
      descripcion: 'Si tu disipador no trae pasta pre-aplicada, aplica una cantidad del tamaño de un guisante (arveja) justo en el centro del procesador.',
      detalleTecnico: 'Compuesto: Óxido de zinc/Plata',
      nota: 'No la esparzas manualmente; la presión del disipador lo hará por ti para evitar burbujas de aire.',
      color: 'medium'
    },
    {
      fase: 'Cooling',
      titulo: 'Montaje del Disipador',
      descripcion: 'Coloca el disipador sobre el CPU alineando los 4 tornillos/ganchos con los agujeros de la placa. Atornilla en patrón de cruz (X) para distribuir la presión uniformemente.',
      detalleTecnico: 'Torque progresivo',
      nota: 'No olvides conectar el cable del ventilador al puerto "CPU_FAN" de la placa madre.',
      color: 'medium'
    },
    {
      fase: 'Memory',
      titulo: 'RAM: Preparación',
      descripcion: 'Identifica las ranuras DIMM. Si tienes 2 módulos y 4 ranuras, usa la segunda y la cuarta contando desde el CPU (usualmente A2 y B2) para activar el Dual Channel.',
      detalleTecnico: 'Arquitectura: Dual Channel DDR4/DDR5',
      nota: 'Abre los clips de sujeción en los extremos de las ranuras seleccionadas.',
      color: 'success'
    },
    {
      fase: 'Memory',
      titulo: 'RAM: Inserción',
      descripcion: 'Alinea la muesca (espacio vacío) en los contactos dorados de la RAM con la barra plástica de la ranura. Presiona firme hacia abajo hasta escuchar un "CLIC" seco y ver que los clips se cierran solos.',
      detalleTecnico: 'Key notch alignment',
      nota: '',
      color: 'success'
    },
    {
      fase: 'Storage',
      titulo: 'Almacenamiento M.2',
      descripcion: 'Localiza el puerto M.2. Atornilla el soporte elevador si no está. Inserta la unidad SSD M.2 en un ángulo de 45° y presiona suavemente hacia abajo. Asegúrala con el tornillo pequeño.',
      detalleTecnico: 'Interface: PCIe NVMe Gen 4.0',
      nota: 'Este tornillo es diminuto y se pierde fácil. Usa un destornillador imantado.',
      color: 'tertiary'
    },
    {
      fase: 'Case Prep',
      titulo: 'Backplate I/O Shield',
      descripcion: 'Si tu placa no tiene el escudo trasero integrado, búscalo en la caja. Instálalo en el hueco rectangular trasero del gabinete presionando desde adentro hacia afuera hasta que haga clic en las 4 esquinas.',
      detalleTecnico: 'Protección EMI (Interferencia)',
      nota: 'Los bordes metálicos pueden ser cortantes, ten cuidado con tus dedos.',
      color: 'dark'
    },
    {
      fase: 'Case Mount',
      titulo: 'Atornillar Placa Madre',
      descripcion: 'Baja la placa madre al gabinete con cuidado. Alinea los agujeros de la placa con los soportes dorados del gabinete. Atornilla los 8-9 tornillos sin apretar demasiado.',
      detalleTecnico: 'Form Factor: ATX Standard',
      nota: 'Asegúrate de que ningún soporte dorado sobre debajo de la placa donde no hay agujero (podría hacer corto).',
      color: 'dark'
    },
    {
      fase: 'Wiring',
      titulo: 'Conectores Panel Frontal',
      descripcion: 'El paso más difícil: Conecta los cables diminutos (Power SW, Reset SW, HDD LED) en los pines inferiores. Consulta el manual de tu placa o las letras impresas en ella para ver el orden.',
      detalleTecnico: 'Pinout: JFP1 Standard',
      nota: 'Los LEDs tienen polaridad (+/-). Los interruptores (Power/Reset) no tienen polaridad.',
      color: 'danger'
    },
    {
      fase: 'Wiring',
      titulo: 'Alimentación Principal',
      descripcion: 'Conecta el cable más grande (24 pines) al lado derecho de la placa. Conecta el cable de CPU (8 pines o 4+4) en la esquina superior izquierda.',
      detalleTecnico: 'ATX 24-pin + EPS 12V',
      nota: 'El cable de CPU (4+4) es diferente al de la gráfica (6+2). No los fuerces.',
      color: 'danger'
    },
    {
      fase: 'GPU',
      titulo: 'Tarjeta Gráfica',
      descripcion: 'Retira las latas traseras del gabinete que coincidan con el puerto PCIe x16 (el más largo y cercano al CPU). Inserta la gráfica y atorníllala al chasis del gabinete.',
      detalleTecnico: 'Bus: PCI Express x16',
      nota: 'No olvides conectar los cables de alimentación PCIe que vienen de la fuente directo a la gráfica.',
      color: 'medium'
    },
    {
      fase: 'Final',
      titulo: 'Gestión de Cables',
      descripcion: 'Usa precintos plásticos para amarrar el exceso de cables en la parte trasera del gabinete. Esto mejora el flujo de aire y la estética.',
      detalleTecnico: 'Airflow Management',
      nota: 'Verifica que ningún cable esté rozando las aspas de los ventiladores antes de cerrar.',
      color: 'success'
    }
  ];

  // Variables Three.js
  private scene: any;
  private camera: any;
  private renderer: any;
  private animationId!: number;
  private modelo: any;

  constructor(private router: Router) { }
  

  ngAfterViewInit() {
    setTimeout(() => {
      this.initThree();
      window.addEventListener('resize', this.onResize);
    }, 50);
  }

  toggleEvaluacion() {
    this.evaluacionAbierta = !this.evaluacionAbierta;
  }

  irAComponentes() {
    this.router.navigate(['/componentes']);
  }

  cambiarPaso(delta: number) {
    const nuevo = this.pasoActual + delta;
    
    if (nuevo >= 0 && nuevo < this.pasos.length) {
      this.pasoActual = nuevo;
      if (this.pasoActual !== this.pasos.length - 1) {
        this.evaluacionAbierta = false;
      }
    }
    // AL FINALIZAR, MOSTRAMOS EL TEST
    else if (delta > 0 && nuevo >= this.pasos.length) {
      this.evaluacionAbierta = true;
    }
  }

  private initThree() {
    const container = this.threeContainer.nativeElement;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf1f5f9); // Coincide con el SCSS

    this.camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    this.camera.position.set(5, 4, 6);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(w, h);
    container.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    
    // Luz direccional más fuerte para ver detalles
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 5);
    this.scene.add(dirLight);

    // Cargar Modelo Intermedio
    const loader = new GLTFLoader();
    
    (loader as any).load('assets/prototipo-intermedio.glb', (gltf: any) => {
      this.modelo = gltf.scene;
      
      // Ajustamos escala (mantengo 0.1, ajusta si el nuevo modelo es diferente)
      this.modelo.scale.set(0.006, 0.006, 0.006); 
      this.modelo.position.set(0, 1, 0); 
      
      this.scene.add(this.modelo);
    }, undefined, (err: any) => console.error('Error modelo intermedio:', err));

    this.animate();
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    
    // Rotación suave
    if (this.modelo) {
      this.modelo.rotation.y += 0.003; 
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
