import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
@Injectable()

export class InformacionComponent implements OnInit {
  libros: Array<any>;
  libroClick!: any;
  libroId!: number;
  

  constructor(private rutausuario: ActivatedRoute) {
    this.libros = [
      { id: '1', titulo: 'Te veré bajo la lluvia', autor: 'Robert Bryna' },
      { id: '2', titulo: 'Dime quién soy', autor: 'July Navaja' },
      { id: '3', titulo: 'El día que se perdió', autor: 'Javi Castel' },
    ];
  }

  ngOnInit(): void {
    this.rutausuario.params.subscribe((params): void => {
      this.libroId = params['libroId'];
      this.libroClick = this.libroBuscador();
    });
  }

  filtroId(libro: any): boolean {
    return libro.id == this;
  }

  libroBuscador() {
    return this.libros.filter (this.filtroId, this.libroId)[0];
  }

  
}

