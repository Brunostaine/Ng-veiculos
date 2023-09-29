import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../core/services/carros.service';
import { Veiculo } from '../core/models/Veiculo';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss'],
})
export class CarrosComponent implements OnInit {

  veiculos: Veiculo[] = []

  constructor(private carrosService: CarrosService) {}

  ngOnInit(): void {
    this.buscarCarros();
  }

  buscarCarros(): void {
    this.carrosService.buscarCarros().subscribe((carros) => {
      this.veiculos = carros
    });
  }
}
