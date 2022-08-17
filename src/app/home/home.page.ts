import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
mensagem : string = 'Olá mundo';
  constructor() {}

  mudarMensagem(){
    this.mensagem = 'Mensagem alterada';
  }
}
