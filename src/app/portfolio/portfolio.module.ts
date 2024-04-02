import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DiversComponent } from './divers/divers.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    VideoGamesComponent,
    ApplicationsComponent,
    DiversComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PortfolioModule { }
