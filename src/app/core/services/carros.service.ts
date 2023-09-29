import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Veiculo } from '../models/Veiculo';

@Injectable({
  providedIn: 'root',
})
export class CarrosService {
  private urlCarros = '/api/veiculos';

  constructor(private http: HttpClient) {}

  buscarCarros(): Observable<Veiculo[]> {
    const veiculo = this.http.get<Veiculo[]>(this.urlCarros)
    .pipe(tap((carros) => {}));
    return veiculo;
  }

  buscarCarro(id: number):Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.urlCarros}/${id}`)
  }
}
