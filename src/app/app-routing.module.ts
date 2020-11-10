import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes=[
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nueva-denuncia',
    loadChildren: () => import('./paginas/nueva-denuncia/nueva-denuncia.module').then(m => m.NuevaDenunciaPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./paginas/detalle/detalle.module').then(m => m.DetallePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
