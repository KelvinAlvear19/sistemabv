import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataLibros:any[] = [
    {id:1, Nombre:'A traves de ti', descripcion:'Artemis, Ares y Apolo Hidalgo son los responsables de muchos suspiros de chicas en las calles y con los que crecí aunque no seamos familia. Muchas personas me creen afortunada, pero están tan equivocados sobre mi vida, no saben mi historia, no todo es color de rosa en la vida de una chica como yo.'},
    {id:2, Nombre:'A dos metros de ti', descripcion:'Stella tiene diecisiete años y a diferencia del resto de sus otros amigos vive una vida con una rutina bastante diferente. La joven padece fibrosis quística y pasa gran parte del tiempo en el hospital donde cada día tiene que poner a prueba su autocontrol, algo que se verá alterado cuando conozca a otro paciente.'},
    {id:3, Nombre:'Ciudades de Papel', descripcion:'Quentin Jacobsen, un joven que atiende al sobrenombre de Q, ha pasado toda su vida amando en secreto a la aventurera Margo Roth Spiegelman. Así que cuando ella rompe una ventana y entra en su vida disfrazada de ninja y reclutándole para una misión de venganza, él le sigue sin dudar.'},
    {id:4, Nombre:'Violet y finch', descripcion:'Esta es la historia de una chica que aprende a vivir de un chico que pretende morir; de dos jóvenes que se encuentran y dejan de contar los días para empezar a vivirlos.'},
    {id:5, Nombre:'Bajo la Misma la Estrella', descripcion:'Bajo la misma estrella es una historia sobre el amor y la muerte, narrada en clave de drama y humor, en la que el cáncer aparece como fondo protagonista para alertar sobre la importancia de valorar la vida y disfrutar del presente.'},
    ];
    listFields:string[] = ['id','Nombre','Descripcion'];
  constructor() { }

  ngOnInit(): void {
  }

}
