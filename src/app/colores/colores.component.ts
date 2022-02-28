import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

 


 texto: string = 'hola desde colores';
  makingColorCode: any;
 


  constructor() { }

  ngOnInit(): void {
  }
colorCode =  () => {
       this.makingColorCode = '0123456789ABCDEF';
      var finalCode = '#';
      for (var counter = 0; counter < 6; counter++) {
         finalCode = finalCode + this.makingColorCode[Math.floor(Math.random() * 16)];
      }
      return finalCode;
      return this.makingColorCode;
   }

  


}
