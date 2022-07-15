import { Component, OnInit } from '@angular/core';
import {Pergunta} from  '../pergunta';
import {Alternativa} from  '../alternativa';



@Component({
  selector: 'app-criar-editar-form',
  templateUrl: './criar-editar-form.component.html',
  styleUrls: ['./criar-editar-form.component.css']
})



export class CriarEditarFormComponent implements OnInit { 
  //define os arrays necessários
  Arr : Array<Pergunta> = [];
  Alts : Array<Alternativa> = [];
  constructor() { }

  ngOnInit(): void {
    //cria a primeira pergunra generica
    this.Arr.push({idForm: 0 , tipo : 0, qtdeAlt: 1, conteudoPergunta:"", alternativas: []})
  }

  //set o tipo de pergunta
  setType(event : Event,index:number){
    //acha o dropdown
    var target = event.target as HTMLElement
    var btn = document.getElementById("pg"+index)
    console.log(target.textContent)
    //zera a pergunta
    var pergunta: Pergunta = { idForm: 0, tipo : 0, qtdeAlt: 1, conteudoPergunta:"", alternativas: []}
    //altera o nome
    if(btn){
      btn.textContent = target.textContent
      if(target.textContent == 'Objetiva'){
        pergunta.tipo = 1;
        this.Arr[index].tipo = 1;
        
      }
      else if(target.textContent == 'Multipla Escolha'){
        pergunta.tipo = 2;
        this.Arr[index].tipo = 2;
      }
      else if(target.textContent == 'Discursiva'){
        pergunta.tipo = 3;
        this.Arr[index].tipo = 3;
      }
    }
  }


  //adiciona a pergunta ao array
  addPg(){
    var pergunta: Pergunta = { idForm: 0, tipo : 0, qtdeAlt:1, conteudoPergunta:"", alternativas: []}
    this.Arr.push(pergunta)
  }

  //remove a pergunta do array
  removePg(event : Event){
    var target = event.target as HTMLElement
    
    var index : number = +target.id
    console.log(index)
    if(target){
      this.Arr.splice(index,1)
    }
  }

  //Remove a alternativa do array
  removeAlt(event : Event,i:number){
    var target = event.target as HTMLElement
    var index : number = +target.id
    this.Arr[i].qtdeAlt -= 1
  }

  //adiciona a alternativa ao array
  addAlt(i:number){
    this.Arr[i].qtdeAlt+=1
  }


  //salva os arrays
  saveForm(){
    this.Alts = []
    for(let i = 0;i<this.Arr.length;i++){
      var enunc = document.getElementById(`enunc${i}`) as HTMLInputElement
      var contEnunc = enunc.value?.toString()
      this.Arr[i].conteudoPergunta = contEnunc

      for(let j = 0; j<this.Arr[i].qtdeAlt;j++){
        var alt = document.getElementById(`alts${i}${j}`) as HTMLInputElement
        var cont = alt.value?.toString()
        var enunc = document.getElementById(`enunc${i}`) as HTMLInputElement
        var enuncctt = enunc.value?.toString()
        console.log(alt)
        if(cont){
          this.Alts.push({idpg:i, content : cont})
        }
      }
    }
    console.log(this.Arr)
    console.log(this.Alts)
  }


  //pra fazer o for 
  counter(i:number){
    return new Array(i)
  }
}


