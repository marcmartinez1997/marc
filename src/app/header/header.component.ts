import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private route:Router) { };

  textoFinal="";
    array = [
      {text: "Home", endpoint: "home" },
      {text: "Heroes", endpoint: "heroes"},
      {text: "About", endpoint: "about"}
    ]

  arr_botons: any = {
    home: false,
    heroes: false,
    about: false
  };
  
  git_hub=false;
  
  //esta funcion nos sirve para detectar el evento clic en el elemento del html. Entonces se activa esta funcion la qual pone en true la variable asociada a dicho elemento clicado,y pone al resto en false
  cambiarcolor(e:any){
      let variable=e.target.innerHTML;
      Object.entries(this.arr_botons).map(entry => { // Object.entries, a diferencia de un for o map nos conseguimos el nombre de la clave,(por ejemplo: about). entry[0] es la clave, entry[1] es el valor
        if(variable.toLowerCase()==entry[0]) {     //comparamos el valor que contiene la variable (que es el nombre del botton) coincide con el nombre (que es la clave dentro del array) que contiene entry[0]
          this.git_hub=false;
          this.arr_botons[entry[0]] =true;
        } else{
        this.arr_botons[entry[0]] = false;  //si en la comp
        }
          
      })
  };


  cambiarcolor_github(){ //sirve para cambiar el color del element que contiene el string "Git_hub"
      this.git_hub=true;
  };

  cargar(texto: any){
    this.textoFinal = texto;
  }

  buscar(){
    this.route.navigate(['/heroe', this.textoFinal]);
  }

  regresar(){
    this.route.navigate(['/heroes', '']); //con el keypress del html cada ve que se activa (es decir, que ponemos una letra o signo en el bsucador) nos lleva al path /heroes
  }


  ngOnInit(): void {
  };


}



