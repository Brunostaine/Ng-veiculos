import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosComponent } from './carros.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CarrosComponent],
  imports: [CommonModule, CarrosRoutingModule, MaterialModule],
})
export class CarrosModule {}
