import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';
import { GoToComponent } from './go-to/go-to.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoToComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GoToComponent
  ]
})
export class SharedModule { }
