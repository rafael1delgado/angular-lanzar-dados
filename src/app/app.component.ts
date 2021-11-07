import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-dados';

  dadoIzquierdo = '../assets/img/dice1.png';
  dadoDerecho = '../assets/img/dice4.png';

  numero1: number | undefined;
  numero2: number | undefined;

  ngOnInit(): void {
    this.lanzarDados();
  }

  lanzarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierdo = '../assets/img/dice' + this.numero1 + '.png';
    this.dadoDerecho = '../assets/img/dice' + this.numero2 + '.png';
  }
}
