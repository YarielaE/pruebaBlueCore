import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios.page').then( m => m.UsuariosPage)
  },
  {
    path: 'usuarios/:id',
    loadComponent: () => import('./usuarios-detalle/usuarios-detalle.page').then( m => m.UsuariosDetallePage)
  },
];
