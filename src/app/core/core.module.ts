import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';

const CORE_COMPONENTS = [MenuComponent]

const MODULES = [MaterialModule, RouterModule];

@NgModule({
  declarations: [CORE_COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [CORE_COMPONENTS],
})
export class CoreModule {}
