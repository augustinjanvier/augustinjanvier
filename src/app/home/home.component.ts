import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showCMR: boolean = false;
  showMyTwido: boolean = false;
  showDinoRPG: boolean = false;

  constructor() {
  }

  ScrollToSection(section: string) {
    console.log(section);
    document.getElementById(section)?.scrollIntoView();
  }
  
}
