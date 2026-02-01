import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// 1. IMPORTACIONES DE FIREBASE
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

// 2. TUS CREDENCIALES (Copiadas tal cual me las pasaste)
const firebaseConfig = {
  apiKey: "AIzaSyD6IB3E-dxKOhDbs70bsuJP9xq2lKTh5LY",
  authDomain: "manualpiensa.firebaseapp.com",
  projectId: "manualpiensa",
  storageBucket: "manualpiensa.firebasestorage.app",
  messagingSenderId: "10719725232",
  appId: "1:10719725232:web:8813c0e1fd7eb0a346dd75",
  measurementId: "G-3W892ETG7S"
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    
    // Mantenemos tu configuración de Router con Precarga (¡Muy bien hecho!)
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // 3. INICIALIZAR FIREBASE
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
});