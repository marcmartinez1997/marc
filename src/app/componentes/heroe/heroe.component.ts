import { identifierName, isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe : any

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
   

  constructor(private route : ActivatedRoute, private ruta: Router) { /*es el constructor del componente, como cualquier constsructor de una clase*/
    
  }

  string_no_encontrado=false; //si viene un string escrito en el search que no coincide con el nombre de ninguno de los personajes pues se pondra en true

  myFunction(event: any): void { /*significa que en el return devuelve un string*/
    const p: any = document.querySelector("p")
    p.innerHTML = "el heroe és " + this.heroe.nombre 
    //event.target.innerHTML = "el heroe és " + this.heroe.nombre 
  }

  id:any; //para capturar su id
  item:any;
  marvel=true;

  ngOnInit(): void {     /* se ejecuta al cargar la pagina, no duevelve nada como tal, por eso el "void" */
    this.id = this.route.snapshot.paramMap.get('id');

    var contador_personajes=0;
    //aqui miramos que personaje dentro del array_heroes contiene la id (que hemos capturado en el path)
    this.array_heroes.map(item => { //en este caso el .map es equivalente a -->  for(let i=0;i> this.array_heroes.length; i++){}
      if (this.id == item.id || item.nombre.toLowerCase().indexOf(this.id.toLowerCase()) >= 0 ) { 
        this.heroe = item;
        contador_personajes=contador_personajes+1;
      }
    });

    if(contador_personajes>1){ //si vemos que hay que printar mas de un personaje, vamos al componente "heroes" y desde ahi se deven printar 
      this.ruta.navigate(['/heroes', this.id]);
      }

    else if(this.id==''){ //este caso se da si no hay nada escrito en el search("")
      this.ruta.navigate(['/home']);
    }
    else if(contador_personajes==0){ //no hay ningun heroe que su nombre contenga tal string escrita en el search, y no esta vacio, ya que sino entra en el else if anterior
      this.string_no_encontrado=true;
    }

    else{ //aqui solo entramos en caso de que se necesite mostrar desde este componente el personaje elegido (UNO solo), en caso de que se muestren 2, no hace falta entrar en este if
      if(this.heroe.casa==="DC"){
        this.marvel=false;
      }

    }
    //este ultimo if nos sirve para saber que tipo de casa tiene el personaje, si es de marvel tenemos que la variable "marvel" se queda en true
    //la variable "marvel" la usaremos en el html con un *ngIf para saber que tipo de imagen mostrar.

  }
}
