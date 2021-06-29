import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
} //aqui você tem variáveis que podem que são exportadas para o html e podem ser acessadas pelo uso de {{ }}
