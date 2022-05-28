import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataRes:any[] = [
    {id:1, Libro:'A traves de ti', Reseña:'No puedo expresar todas las emociones que este libro me hizo sentir en tan poco tiempo la historia de Claudia como mujer y ejemplo de superación, para ella y para su madre me ha inspirado por que sin importar cuantos obstáculos se le atravesaran fue capaz de amar en todo sentido y lograr todo lo que queria al lado de Artemis hidalgo, el cual también ha pasado demasiadas cosas, pero al final es un ejemplo de que todo en la vida se puede si esperas un poco por ello :) en fin fuego y hielo '},
    {id:2, Libro:'A dos metros de ti', Reseña:'A mi parecer es una hermosa película, da gusto verla solo o en en pareja es muy agradable y linda de ver. Quizás un poco predecible en la trama pero sorprendente al final, pero aun así llega al corazón como un respiro.Le daré cinco estrellas o en otras maneras de calificar un 10/10 puedo decir que se a vuelto una de mis películas preferidas de este genero'},
    {id:3, libro:'Ciudades de Papel', Reseña:'Es interesante, mientras la miras podrías decir que la vida de margo es muy fácil, pero solo es una chica confundida y no sabe que hacer con su vida como muchos aquí, además de hacerte reflexionar, te da un mensaje, para saber quien eres tienes que explorar y si lo que haces hace que se te salga el corazón eso es lo que quieres hacer  y si tu meta es hacer eso que tanto te gusta, hazlo porque la vida es una y no sabes cuando se acaba  "VivE aL 100" :)'},
    {id:4, Libro:'Violet y finch', Reseña:'Me encantó, lloré mucho :( esta película te enseña muchas cosas, una de estas es la empatía, aunque haya miles de problemas debemos afrontarlo, y si hay una persona pasando tormentas, tenemos que brindarle nuestro apoyo y comprenderl@, aunque parezca más difícil de lo que es, hay que ayudarl@. Amé esta película en serio, te enseña muchos valores. 😭'},
    {id:5, libro:'Bajo la Misma Estrella', Reseña:'Es una de las mejores película.La mejor película, te enseña sobre el valor de la vida y cuanto duele cuando alguien que aprecias se va, cuando siempre creíste que tu irías primero y no verás su partida. En resumen esta película nos enseña que es la vida y que podemos crear momentos mágicos y bonitos para recordar, es lo mejor.'},
    ];
    listFields:string[] = ['id','libro','Reseña'];
  constructor() { }

  ngOnInit(): void {
  }

}
