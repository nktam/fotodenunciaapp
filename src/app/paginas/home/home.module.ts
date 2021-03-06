import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {RouterModule} from '@angular/router';
import {ChartsModule} from 'ng2-charts';
import {OrdenarPipe} from '../../pipes/ordenar.pipe';

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule,
  ],
  declarations: [HomePage, OrdenarPipe]
})
export class HomePageModule { }
