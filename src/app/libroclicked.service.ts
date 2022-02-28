import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {

  libros: Array<any>

  constructor() {
    this.libros = [];
   }
 libroVisto() {
   this.libros.push(this.libroVisto);
 }

 verListado(){
   if (this.libros.length > 0){
     return this.libros;
   } else {
     return false
   }
 }
}
