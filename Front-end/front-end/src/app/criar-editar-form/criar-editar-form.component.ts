import { Component, OnInit } from '@angular/core';


export interface Pergunta {
  tipo: string;
}

@Component({
  selector: 'app-criar-editar-form',
  templateUrl: './criar-editar-form.component.html',
  styleUrls: ['./criar-editar-form.component.css']
})



export class CriarEditarFormComponent implements OnInit {

  pergunta: Pergunta
   
  constructor() { }

  ngOnInit(): void {
    this.pergunta.tipo = 'discursiva'
  }

}
