import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink]
})
export class ComponentesPage {

  modalAbierto = false;
  componenteSeleccionado: any = null;

  // --- SECCIÓN DE NIVELES (Con tus nuevos Emojis) ---
  guiasArmado = [
    {
      nivel: 'Nivel 1',
      titulo: 'Básico',
      ruta: '/prototipo-basico',
      // Emoji Bebé 👶
      icono: 'assets/icon/bebe.png', 
      color: 'teal',
      descripcion: 'Aprende lo esencial.'
    },
    {
      nivel: 'Nivel 2',
      titulo: 'Intermedio',
      ruta: '/prototipo-intermedio',
      // Emoji Nerd 🤓
      icono: 'assets/icon/nerd.png', 
      color: 'blue',
      descripcion: 'Ensamble detallado.'
    },
    {
      nivel: 'Nivel 3',
      titulo: 'Master Pro',
      ruta: '/prototipo-realista',
      // Emoji Gafas de Sol 😎 (Asegúrate de que el archivo se llame así, con guiones)
      icono: 'assets/icon/gafas-de-sol.png', 
      color: 'dark',
      descripcion: 'Refrigeración Líquida.'
    }
  ];

  // --- LISTA DE COMPONENTES ---
  listaComponentes = [
    {
      nombre: 'Procesador (CPU)',
      resumen: 'Cerebro de la computadora.',
      categoria: 'Hardware Crítico',
      icono: 'assets/icon/cpu.png', 
      descripcion: 'La Unidad Central de Procesamiento (CPU) es el componente principal que interpreta las instrucciones y procesa los datos de los programas.',
      funcion: 'Ejecuta todas las instrucciones lógicas y matemáticas, coordinando el funcionamiento de los demás componentes.',
      problemas: 'Sobrecalentamiento (PC se apaga sola), pines doblados al instalar, o lentitud extrema por "Thermal Throttling".'
    },
    {
      nombre: 'Memoria RAM',
      resumen: 'Memoria volátil de acceso rápido.',
      categoria: 'Memoria',
      icono: 'assets/icon/memoria-ram.png',
      descripcion: 'La RAM (Random Access Memory) almacena temporalmente los datos de los programas que estás usando en ese momento.',
      funcion: 'Permite al procesador acceder a los datos de forma instantánea. Al apagar la PC, esta información se borra.',
      problemas: 'Pantallazos azules (BSOD), el equipo no arranca y emite pitidos, o congelamientos repentinos.'
    },
    {
      nombre: 'Disco Duro / SSD',
      resumen: 'Almacenamiento permanente.',
      categoria: 'Almacenamiento',
      icono: 'assets/icon/disco-duro.png',
      descripcion: 'Es donde se guardan tus archivos, fotos, sistema operativo y programas incluso cuando apagas la computadora.',
      funcion: 'Leer y escribir datos a largo plazo. Los SSD son mucho más rápidos que los discos mecánicos (HDD).',
      problemas: 'Lentitud al abrir programas, ruidos mecánicos (clic-clic en HDD), o corrupción de archivos.'
    },
    {
      nombre: 'Placa Base',
      resumen: 'Conecta todos los componentes.',
      categoria: 'Hardware Crítico',
      icono: 'assets/icon/placa-base.png',
      descripcion: 'La Motherboard es el circuito principal donde se enchufan el CPU, RAM, discos y tarjeta gráfica.',
      funcion: 'Sirve como la autopista de comunicación entre todos los componentes del sistema.',
      problemas: 'El equipo enciende ventiladores pero no da video, puertos USB muertos, o capacitores hinchados.'
    },
    {
      nombre: 'Fuente de Poder',
      resumen: 'Suministra energía al sistema.',
      categoria: 'Energía',
      icono: 'assets/icon/fuente-de-alimentacion.png',
      descripcion: 'Convierte la corriente alterna (AC) de tu enchufe en corriente continua (DC) que la PC puede usar.',
      funcion: 'Alimentar de forma estable a cada componente (12V, 5V, 3.3V).',
      problemas: 'Olor a quemado, reinicios aleatorios cuando juegas, o el PC no enciende en absoluto.'
    },
    {
      nombre: 'Tarjeta Gráfica',
      resumen: 'Procesamiento de gráficos.',
      categoria: 'Periféricos',
      icono: 'assets/icon/tarjeta-de-video.png',
      descripcion: 'La GPU se encarga de calcular todo lo que ves en el monitor, especialmente juegos y renderizado 3D.',
      funcion: 'Liberar al CPU de la carga gráfica para mostrar imágenes fluidas y de alta calidad.',
      problemas: 'Artefactos visuales (rayas en pantalla), pantalla negra al instalar drivers, o ventiladores muy ruidosos.'
    },
    {
      nombre: 'Ventilador / Cooler',
      resumen: 'Sistema de enfriamiento.',
      categoria: 'Refrigeración',
      icono: 'assets/icon/ventilador.png',
      descripcion: 'Dispositivos encargados de mover aire caliente fuera del gabinete o del disipador del CPU.',
      funcion: 'Mantener las temperaturas dentro de rangos operativos seguros para evitar daños.',
      problemas: 'Ruido excesivo (rodamiento gastado), acumulación de polvo que bloquea el aire, o vibraciones.'
    },
    {
      nombre: 'Batería',
      resumen: 'Energía para laptops.',
      categoria: 'Energía',
      icono: 'assets/icon/bateria.png',
      descripcion: 'Componente químico que almacena energía para que una portátil funcione sin estar enchufada.',
      funcion: 'Proveer autonomía y portabilidad al equipo.',
      problemas: 'La carga dura muy poco, la laptop se apaga al desconectar el cargador, o la batería se hincha (peligroso).'
    }
  ];

  constructor() { }

  abrirDetalle(componente: any) {
    this.componenteSeleccionado = componente;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.componenteSeleccionado = null;
  }
}