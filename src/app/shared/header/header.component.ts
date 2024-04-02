import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @ViewChild('sideMenu') sideMenu!: ElementRef;

  mobile: boolean = false;

  menuOpen: boolean = false;

  constructor(
    private renderer: Renderer2,
    public router: Router
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.sideMenu.nativeElement) {
        this.menuOpen = false;
      }
    });
  }

  ngOnInit(): void {
    this.mobile = window.screen.width < 600;
  }
}
