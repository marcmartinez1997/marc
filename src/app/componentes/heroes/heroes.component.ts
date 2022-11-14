import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  array_heroes=[
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC",
      id:"0"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC",
      id:"1"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel",
      id:"2"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel",
      id:"3"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC",
      id:"4"

    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel",
      id:"5"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel",
      id:"6"
    }
      

    
    ];

  
  constructor(private route : ActivatedRoute, private ruta: Router) {} 
  
  array_cols= new Array();
  personaje:any;
  path=new Array;
  hola=true;

  ngOnInit(): void {
    this.path=window.location.href.split('/');
    this.personaje=this.path[this.path.length-1];
    var longitud_array=0;
    var cols=3;/*porque queremos 3 columnas, pero si pusieramos menos se mostrarian correctamente. cols>3 no puede ser por un tema de espacio*/
    var heroes_por_col=0;
    var personajes_faltantes=0;
    let contador_id=0; /*con esta variable iremos creando el numero de personajes (que a la vez es el numero de valor dentro del array_cols)*/
    var array_personajes_buscador=new Array();

    if(this.personaje=="heroes"){  //aquí entraria cuando cargamos el array de heroes clicando al boton "Heroes" en el header, que se nos muestran todos
                for (let i=0;i<this.array_heroes.length;i++){
                  array_personajes_buscador.push(i);
                }
            }
    else {
      //aqui dentro estamos porque hay una palabra escrita en el path en relacion a mostrar personajes, que esta palabra es la que se ha escrito inicialmente en el search del header
      for (let i=0; i<this.array_heroes.length; i++){ //miramos para cada uno de los personajes del array "array_heroes"
        if (this.array_heroes[i].nombre.toLowerCase().indexOf(this.personaje.toLowerCase()) >= 0){ 
            array_personajes_buscador.push(this.array_heroes[i].id); //guardamos los id de los personajes cuyos nombres contienen el string escrito en el buscador del header
          }       
      }

   }

   longitud_array=array_personajes_buscador.length;
   heroes_por_col= Math.floor(longitud_array/cols); //floor redondea para abajo
   personajes_faltantes= longitud_array % cols;

   for(let i=0; i< cols; i++){ /*primer for itera por columnas, equivalente a claves (dentro del array_cols)*/
   var nw_Array=new Array(); 
   this.array_cols.push(nw_Array);

   if(personajes_faltantes>0) {/*añadimos los id de los personajes que van a la columna numero "num" que hace de clave dentro del diccionario */
     this.array_cols[i].push(array_personajes_buscador[contador_id]);  /*sumamos un nuevo id a la columna numero "i" */
     contador_id += 1;
     personajes_faltantes -= 1;
   } 
   for(let m=0; m< heroes_por_col; m++){ /*segundo for itera por personajes, equivalente a valores (dentro del array_cols) */
     this.array_cols[i].push(array_personajes_buscador[contador_id]);  /*sumamos un nuevo id a la columna (o array) numero "i" */
     contador_id += 1;
   }
    }


      }//end NgonInit
   
      



}
