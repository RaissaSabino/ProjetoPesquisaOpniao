import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tela-chave',
  templateUrl: './tela-chave.component.html',
  styleUrls: ['./tela-chave.component.css']
})
export class TelaChaveComponent implements OnInit {


  constructor() {

   }

  ngOnInit(): void {
  }

  getCode(){
    var elCod = document.getElementById('codigo') as HTMLInputElement

    return elCod.value.toString()
  }
}
