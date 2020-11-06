import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {NuevaDenunciaPageRoutingModule} from './nueva-denuncia-routing.module';

import {NuevaDenunciaPage} from './nueva-denuncia.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaDenunciaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NuevaDenunciaPage]
})
export class NuevaDenunciaPageModule {}
