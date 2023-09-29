import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosComponent } from './carros.component';
import { MaterialModule } from '../material/material.module';
import { CarrosDetalheComponent } from './carros-detalhe/carros-detalhe.component';

@NgModule({
  declarations: [CarrosComponent, CarrosDetalheComponent],
  imports: [CommonModule, CarrosRoutingModule, MaterialModule],
})
export class CarrosModule {}
