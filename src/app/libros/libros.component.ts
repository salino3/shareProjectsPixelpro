import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';
import { HttpClient, HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  
  verAutor!:string;
  libros: any;
  errorHttp: boolean = false;
  constructor(private http: HttpClient, public Libroclicked: LibroclickedService) {
   
  }
  
  cargarLista() {
    this.http.get('assent/lista-libros.json').subscribe(
      (respuesta: any ) => { this.libros = respuesta; },
      (_respuesta: Response) => { this.errorHttp = true; }
    );
  }




  ngOnInit(): void {
    this.cargarLista();
  }

  agregarLibro( _libroVisto: any){
    this.Libroclicked.libroVisto(_libroVisto);
  }
 
}
