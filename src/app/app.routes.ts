import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'historia-computacion',
    loadComponent: () => import('./pages/contexto/historia-computacion/historia-computacion.page').then( m => m.HistoriaComputacionPage)
  },
  {
    path: 'impresion3d',
    loadComponent: () => import('./pages/contexto/impresion3d/impresion3d.page').then( m => m.Impresion3dPage)
  },
  {
    path: 'componentes',
    loadComponent: () => import('./pages/aprendizaje/componentes/componentes.page').then( m => m.ComponentesPage)
  },
  {
    path: 'prototipo-basico',
    loadComponent: () => import('./pages/aprendizaje/prototipo-basico/prototipo-basico.page').then( m => m.PrototipoBasicoPage)
  },
  {
    path: 'prototipo-intermedio',
    loadComponent: () => import('./pages/aprendizaje/prototipo-intermedio/prototipo-intermedio.page').then( m => m.PrototipoIntermedioPage)
  },
  {
    path: 'prototipo-realista',
    loadComponent: () => import('./pages/aprendizaje/prototipo-realista/prototipo-realista.page').then( m => m.PrototipoRealistaPage)
  },
  {
    path: 'razon-social',
    loadComponent: () => import('./pages/cierre/razon-social/razon-social.page').then( m => m.RazonSocialPage)
  },
  {
    path: 'creditos',
    loadComponent: () => import('./pages/cierre/creditos/creditos.page').then( m => m.CreditosPage)
  },
];
