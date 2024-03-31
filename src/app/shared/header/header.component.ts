import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  mobile: boolean = false;

  menuOpen: boolean = true;

  ngOnInit(): void {
    this.mobile = window.screen.width < 600;
  }

}
