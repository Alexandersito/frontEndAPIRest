import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../habitacion.service';

@Component({
  selector: 'app-listahabitacion',
  templateUrl: './listahabitacion.component.html',
  styleUrls: ['./listahabitacion.component.css']
})
export class ListahabitacionComponent implements OnInit {

  constructor(private habitacionService: HabitacionService) { 
    this.habitacionService.listarHabitacion();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.habitacionService.lista;
  }

}
