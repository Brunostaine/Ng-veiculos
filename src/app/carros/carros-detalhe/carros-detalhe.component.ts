import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from 'src/app/core/models/Veiculo';
import { CarrosService } from 'src/app/core/services/carros.service';

@Component({
  selector: 'app-carros-detalhe',
  templateUrl: './carros-detalhe.component.html',
  styleUrls: ['./carros-detalhe.component.scss'],
})
export class CarrosDetalheComponent implements OnInit {
  veiculo?: Veiculo;

  constructor(
    private route: ActivatedRoute,
    private carrosService: CarrosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.buscarVeiculo();
  }

  buscarVeiculo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.carrosService.buscarCarro(id).subscribe((carro) => {
      this.veiculo = carro;
    });
  }

  voltar(): void {
    this.location.back();
  }
}
