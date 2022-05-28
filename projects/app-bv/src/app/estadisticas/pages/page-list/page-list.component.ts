import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataEst:any[] = [
    {id:1,Libro:'A traves de Ti',Puntuación:'⭐⭐⭐⭐⭐'},
    {id:2,Libro:'A dos Metros de Ti',Puntuación:'⭐⭐⭐⭐'},
    {id:3,Libro:'Ciudades de Papel',Puntuación:'⭐⭐'},
    {id:4,Libro:'Violet y Finch',Puntuación:'⭐⭐⭐⭐⭐'},
    {id:5,Libro:'Bajo la Misma Estrella',Puntuación:'⭐'}
  ];
  listFields:string[] = ['Id','Libro','Puntuacion'];
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataEst);
    
    
  }

}

