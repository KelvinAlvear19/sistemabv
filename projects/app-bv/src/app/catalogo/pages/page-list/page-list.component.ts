import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataCatalogo:any[] = [
    {id:1, Categoria:'Aventura', descripcion:'Es un género narrativo literario que narra los viajes, el misterio y el riesgo. Una característica recurrente es la acción presente hasta dominar los escenarios, básica para el desarrollo de la trama.'},
    {id:2, Categoria:'Ciencia Ficcion', descripcion:'La ciencia ficción es un género de la narrativa de ficción en el que están presentes avances científicos y técnicos, ya sea en el futuro o en el presente, que afectan e intervienen en la sociedad y en la vida de los individuos.'},
    {id:3, Categoria:'Erotica', descripcion:'La literatura erótica es un género literario en el cual los textos se relacionan, directa o indirectamente, con el erotismo y el sexo.'},
    {id:4, Categoria:'Fantasia', descripcion:'Se conoce como literatura fantástica a cualquier relato en que participan fenómenos sobrenaturales y extraordinarios, como la magia o la intervención de criaturas inexistentes.'},
    {id:5, Categoria:'Misterio', descripcion:'El término novela de misterio a menudo es utilizado como sinónimo de novela de detective o novela de crimen'},
    {id:6, Categoria:'Romantica', descripcion:'En la novela romántica el amor lleva al protagonista hacia un desenlace fatal. Esta es una consecuencia del apasionamiento exaltado: la entrega total a los sentimientos románticos, irracionales. El amor consume la vida de los protagonistas y los precipita hacia desenlaces fatales.'},
    {id:7, Categoria:'Aventura', descripcion:'Es un género narrativo literario que narra los viajes, el misterio y el riesgo. Una característica recurrente es la acción presente hasta dominar los escenarios, básica para el desarrollo de la trama.'},
    {id:8, Categoria:'Ciencia Ficcion', descripcion:'La ciencia ficción es un género de la narrativa de ficción en el que están presentes avances científicos y técnicos, ya sea en el futuro o en el presente, que afectan e intervienen en la sociedad y en la vida de los individuos.'},
    {id:9, Categoria:'Erotica', descripcion:'La literatura erótica es un género literario en el cual los textos se relacionan, directa o indirectamente, con el erotismo y el sexo.'},
    {id:10, Categoria:'Fantasia', descripcion:'Se conoce como literatura fantástica a cualquier relato en que participan fenómenos sobrenaturales y extraordinarios, como la magia o la intervención de criaturas inexistentes.'},
    {id:11, Categoria:'Misterio', descripcion:'El término novela de misterio a menudo es utilizado como sinónimo de novela de detective o novela de crimen'},
    {id:12, Categoria:'Romantica', descripcion:'En la novela romántica el amor lleva al protagonista hacia un desenlace fatal. Esta es una consecuencia del apasionamiento exaltado: la entrega total a los sentimientos románticos, irracionales. El amor consume la vida de los protagonistas y los precipita hacia desenlaces fatales.'},
    ];
    listFields:string[] = ['Id','Canal','Descripcion'];
  constructor() { }

  ngOnInit(): void {
  }

}
