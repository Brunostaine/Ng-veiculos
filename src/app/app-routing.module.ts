import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosDetalheComponent } from './carros/carros-detalhe/carros-detalhe.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'estoque' },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },

  {
    path: 'estoque',
    loadChildren: () =>
      import('./carros/carros.module').then((m) => m.CarrosModule),
  },
  {
    path: 'estoque/:id',
    component: CarrosDetalheComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
