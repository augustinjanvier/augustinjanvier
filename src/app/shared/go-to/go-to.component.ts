import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-go-to',
  templateUrl: './go-to.component.html',
  styleUrl: './go-to.component.scss'
})
export class GoToComponent {

  @Input() path: string = '';
  @Input() text: string = 'Retour à l\'accueil.'

}
