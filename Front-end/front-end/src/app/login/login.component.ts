import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mudarCorCinza("div_1");
    this.mudarCorCinza("div_2");
  }

  mudarCorVermelha(idTag : String){
    var inp = document.querySelector('#'+idTag);

    inp?.setAttribute('style', 'border-bottom: .15em solid #ED0007;');
    console.log(inp)
    
  }
  mudarCorCinza(idTag : String){
    var inp = document.querySelector('#'+idTag);
    inp?.setAttribute('style', 'border-bottom: .15em solid #C1C7CC;');
    console.log(inp)
  }


}
