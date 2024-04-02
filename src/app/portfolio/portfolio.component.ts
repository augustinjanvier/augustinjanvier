import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(
    private titleService: Title,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.titleService.setTitle("Augustin Janvier - Mes projets");
  }
}
