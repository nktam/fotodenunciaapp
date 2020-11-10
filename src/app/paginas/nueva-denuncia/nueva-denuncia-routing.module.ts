import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NuevaDenunciaPage} from './nueva-denuncia.page';

const routes: Routes=[
  {
    path: '',
    component: NuevaDenunciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaDenunciaPageRoutingModule { }
