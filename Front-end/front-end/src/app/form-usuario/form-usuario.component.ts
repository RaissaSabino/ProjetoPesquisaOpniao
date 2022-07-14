import { Component, OnInit } from '@angular/core';
import { Alternativa } from '../alternativa';
import { Pergunta } from '../pergunta';
import axios from "axios";

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  titulo : string
  perguntas : Array<Pergunta> =[]
  alternativas : Array<Alternativa> = []

  constructor() { }

  ngOnInit(): void {

    var config = {
      "url": "http://localhost:5253/Pesquisa/get",
      "method": "GET",
      "timeout": 0,
    };

    var instance = this;
    axios(config)
    .then(function (response:any) {
      instance.perguntas = response.data;
      console.log(response.data);
    })
    .catch(function (error:any) {
      console.log(error);
    });
    

    // this.titulo = 'Formulário 1'
    // for(var k = 0; k<6; k++){
    //   if(k<2){

    //       this.perguntas.push({idForm: 0,tipo : "Objetiva", qtdeAlt:2, enunciado : `Pergunta ${k+1}`})
    //       for(var j = 0; j< 2; j++){
    //         this.alternativas.push({ idpg:k, content : `Alternativa ${k+1}`})
    //       }
        
    //   }
    //   else if(k<4){

    //       this.perguntas.push({idForm: 0,tipo : "Multipla Escolha", qtdeAlt:2, enunciado : `Pergunta ${k+1}`})
    //       for(var j = 0; j< 2; j++){
    //         this.alternativas.push({ idpg:k, content : `Alternativa ${k+1+j}`})
    //       }
        
    //   }
    //   else if(k<6){

    //       this.perguntas.push({idForm: 0,tipo : "Discursiva", qtdeAlt:1, enunciado : `Pergunta ${k+1}`})

    //   }
    // }
    console.log(this.perguntas)
    console.log(this.alternativas)
  }

  counter(i:number){
    return new Array(i)
  }
}

