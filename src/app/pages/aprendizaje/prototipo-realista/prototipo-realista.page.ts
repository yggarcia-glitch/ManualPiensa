import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prototipo-realista',
  templateUrl: './prototipo-realista.page.html',
  styleUrls: ['./prototipo-realista.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,RouterModule]
})
export class PrototipoRealistaPage implements AfterViewInit, OnDestroy {

  @ViewChild('threeContainer', { static: false }) threeContainer!: ElementRef;

  pasoActual = 0;

  // --- GUÍA PRO (Mismo contenido, ahora en estilo claro) ---
  pasos = [
    {
      fase: 'PREPARACION',
      titulo: 'Banco de Pruebas',
      descripcion: 'Antes de montar en el gabinete, colocamos la placa madre sobre su caja de cartón. Esto nos permite probar los componentes principales (CPU, RAM, GPU, PSU) fuera del chasis y detectar fallos de fábrica antes de atornillar todo.',
      herramienta: 'Superficie No Conductiva',
      riesgo: 'Descarga Electrostática (ESD)',
      tip: 'Conecta solo el cable de 24 pines y el de CPU para hacer un "POST test" rápido puenteando los pines de encendido.'
    },
    {
      fase: 'CPU',
      titulo: 'Instalación del Procesador',
      descripcion: 'Abre el retenedor del zócalo. Alinea el triángulo dorado. Si usas Intel 12th/13th/14th Gen, considera usar un "Contact Frame" para mejorar la temperatura en 5-10°C, reemplazando el mecanismo de carga original (ILM).',
      herramienta: 'Llave Torx (si usas Contact Frame)',
      riesgo: 'Pines doblados',
      tip: 'No fuerces nada. Si no entra suave, revisa la alineación. Guarda la tapa plástica negra para garantía.'
    },
    {
      fase: 'STORAGE',
      titulo: 'NVMe Gen 4.0 con Disipador',
      descripcion: 'Retira el disipador térmico (Heatsink) de la placa madre. Quita el plástico protector azul/transparente del pad térmico. Instala el SSD M.2 y vuelve a atornillar el disipador encima presionando firmemente.',
      herramienta: 'Destornillador Phillips #0',
      riesgo: 'Overheating (Throttling)',
      tip: 'Usa el slot M.2 superior (más cercano al CPU) para conexión directa a las líneas PCIe del procesador (menor latencia).'
    },
    {
      fase: 'MEMORY',
      titulo: 'RAM DDR5 Dual Channel',
      descripcion: 'Consulta el manual para la prioridad de slots (generalmente A2 y B2). Empuja los módulos hasta escuchar un clic firme. En DDR5, la muesca está casi al centro pero no exactamente; fíjate bien en la orientación.',
      herramienta: 'Manos limpias',
      riesgo: 'Inestabilidad del Sistema',
      tip: 'Asegúrate de activar el perfil XMP 3.0 o EXPO en la BIOS más tarde para alcanzar la velocidad anunciada (ej: 6000MHz).'
    },
    {
      fase: 'AIO PREP',
      titulo: 'Backplate del AIO',
      descripcion: 'Prepara la placa trasera (Backplate) para el bloque de refrigeración líquida. Ajusta los pernos según tu zócalo (LGA1700 o AM5) y colócala por detrás de la placa madre.',
      herramienta: 'Kit de Montaje AIO',
      riesgo: 'Montaje flojo',
      tip: 'Asegúrate de que el backplate quede firme pero no apretado al máximo hasta que pongas el bloque.'
    },
    {
      fase: 'CASE',
      titulo: 'Montaje de Placa Madre',
      descripcion: 'Instala el I/O Shield si no es integrado. Coloca la placa dentro del gabinete alineando con los standoffs. Atornilla desde el centro hacia afuera para evitar tensión en el PCB.',
      herramienta: 'Destornillador Phillips #2',
      riesgo: 'Cortocircuito trasero',
      tip: 'Si tu gabinete tiene un poste central de guía, úsalo para centrar la placa antes de poner el primer tornillo.'
    },
    {
      fase: 'PSU',
      titulo: 'Fuente Modular: Cables',
      descripcion: 'En una fuente modular, conecta SOLO los cables que vas a usar: 1x 24-Pin (Placa), 2x 8-Pin (CPU EPS), y los necesarios para la GPU (12VHPWR o PCIe). Conéctalos primero a la fuente y luego introduce la fuente al gabinete.',
      herramienta: 'Bridas / Precintos',
      riesgo: 'Cables sueltos',
      tip: 'El cable de CPU (4+4) suele dividirse en dos mitades simétricas. El de GPU (6+2) tiene una pieza pequeña colgando.'
    },
    {
      fase: 'AIO RAD',
      titulo: 'Radiador: Orientación',
      descripcion: 'Instala el radiador de 240mm/360mm. Posición ideal: Parte SUPERIOR expulsando aire (Exhaust). Si lo pones al FRENTE, asegúrate de que los tubos queden abajo o que la bomba esté más baja que el punto más alto del radiador.',
      herramienta: 'Tornillos largos + Arandelas',
      riesgo: 'Burbujas en la bomba',
      tip: 'Configuración "Push": Ventiladores empujando aire a través del radiador hacia afuera.'
    },
    {
      fase: 'THERMAL',
      titulo: 'Pasta Térmica: Aplicación',
      descripcion: 'Limpia la superficie del CPU con alcohol isopropílico. Aplica pasta térmica de alta calidad (ej: MX-6 o Kryonaut). Para CPUs modernos rectangulares (LGA1700), usa el patrón de "X" o 5 puntos.',
      herramienta: 'Pasta Térmica High-End',
      riesgo: 'Hotspots',
      tip: 'No pongas demasiada; una capa fina y uniforme bajo presión es lo ideal. El exceso no daña, pero ensucia.'
    },
    {
      fase: 'AIO BLOCK',
      titulo: 'Montaje del Bloque AIO',
      descripcion: '¡QUITA EL PLÁSTICO PROTECTOR DE LA BASE DE COBRE! Coloca el bloque sobre el CPU. Atornilla las tuercas de mariposa en patrón de cruz (esquina superior izq -> inferior der) poco a poco para aplicar presión pareja.',
      herramienta: 'Dedos / Destornillador',
      riesgo: 'Sobrecalentamiento instantáneo',
      tip: 'Olvidar el plástico "Remove Before Flight" es el error #1 en ensambles profesionales.'
    },
    {
      fase: 'AIO WIRING',
      titulo: 'Conexión de Bomba y Fans',
      descripcion: 'Conecta el cable de la bomba al cabezal "AIO_PUMP" o "W_PUMP" de la placa (corre al 100% siempre). Conecta los ventiladores del radiador al "CPU_FAN" usando el cable divisor (splitter) incluido.',
      herramienta: 'Manual de Placa',
      riesgo: 'Error de "CPU Fan Error"',
      tip: 'Si conectas la bomba en CPU_FAN, entra a la BIOS y configura ese puerto a "Full Speed" (DC Mode) para evitar que la bomba varíe su velocidad.'
    },
    {
      fase: 'FRONT I/O',
      titulo: 'Panel Frontal Unificado',
      descripcion: 'Conecta los cables del chasis: USB-C, USB 3.0 (conector azul grande) y Audio HD (esquina inferior izq). Conecta los pines de Power/Reset/LED con paciencia o usa el adaptador "Q-Connector" si tu placa lo trae.',
      herramienta: 'Pinzas de punta fina',
      riesgo: 'Botón Power no funciona',
      tip: 'El triángulo pequeño en los conectores de plástico negro indica el polo POSITIVO (+).'
    },
    {
      fase: 'GPU',
      titulo: 'La Bestia Gráfica',
      descripcion: 'Abre el seguro del puerto PCIe x16. Inserta la GPU vertical u horizontalmente. Usa 2 o 3 cables PCIe INDEPENDIENTES desde la fuente, evita usar el conector "pigtail" (el que cuelga del mismo cable) para cargas altas.',
      herramienta: 'Soporte Anti-Sag',
      riesgo: 'Cables derretidos (12VHPWR)',
      tip: 'Si usas el nuevo conector 12VHPWR (Nvidia serie 40), asegúrate de que esté insertado A FONDO hasta no ver ninguna línea divisoria.'
    },
    {
      fase: 'MGMT',
      titulo: 'Gestión de Cables Pro',
      descripcion: 'Usa los canales traseros del gabinete. Agrupa cables con velcros. Deja holgura en los cables del AIO para no tensar los tubos. El objetivo es que el flujo de aire frontal no tenga obstrucciones.',
      herramienta: 'Velcros / Precintos',
      riesgo: 'Acumulación de polvo',
      tip: 'Un buen cable management no solo es estética; facilita el mantenimiento y mejora la temperatura.'
    },
    {
      fase: 'FINAL',
      titulo: 'Primer Inicio (POST)',
      descripcion: 'Conecta monitor a la GPU (no a la placa). Enciende la fuente (switch I). Presiona Power. Espera... el primer arranque con DDR5 puede tardar hasta 2 minutos en "Memory Training".',
      herramienta: 'Paciencia',
      riesgo: 'Pánico prematuro',
      tip: 'Si no da video, mira los LEDs de depuración (Q-LEDs) en la placa madre (Rojo=CPU, Naranja=RAM, Blanco=VGA, Verde=Boot).'
    }
  ];

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

cambiarPaso(delta: number) {
    const nuevo = this.pasoActual + delta;
    
    if (nuevo >= 0 && nuevo < this.pasos.length) {
      this.pasoActual = nuevo;
    }
    // AL FINALIZAR EL BUILD, VOLVEMOS A COMPONENTES
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
    // FONDO CLARO IGUAL QUE LOS OTROS PROTOTIPOS
    this.scene.background = new THREE.Color(0xeef2f6);

    // 1. Configurar Cámara (Más lejos para asegurar que quepa el modelo grande)
    this.camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    this.camera.position.set(5, 1, 5);
    this.camera.lookAt(0, 0, 0);

    // 2. Configurar Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(w, h);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // 3. Luces (Ajustadas para fondo claro)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    // 4. Cargar y AUTO-AJUSTAR Modelo
    const loader = new GLTFLoader();
    
    (loader as any).load('assets/prototipo-.glb', (gltf: any) => {
      this.modelo = gltf.scene;

      // --- AUTO-ESCALADO (EL FIX MÁGICO) ---
      // Mide el modelo y lo fuerza a tener un tamaño visible (3 unidades)
      const box = new THREE.Box3().setFromObject(this.modelo);
      const size = new THREE.Vector3();
      box.getSize(size);
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const scaleFactor = 3 / maxDim; // Forzamos que mida 3 unidades
      
      this.modelo.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // --- AUTO-CENTRADO ---
      // Lo movemos para que su centro esté en 0,0,0
      const center = new THREE.Vector3();
      box.getCenter(center);
      
      this.modelo.position.x = -center.x * scaleFactor;
      this.modelo.position.y = -center.y * scaleFactor;
      this.modelo.position.z = -center.z * scaleFactor;

      // Sombras
      this.modelo.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.scene.add(this.modelo);
      console.log('Modelo cargado y ajustado automáticamente.');

    }, undefined, (err: any) => console.error('Error cargando modelo:', err));

    this.animate();
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    
    if (this.modelo) {
      this.modelo.rotation.y += 0.002;
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


//si lo lees ando hasta el **** del piensa