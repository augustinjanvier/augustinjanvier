import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DiversComponent } from './divers/divers.component';
import { DuckBusinessComponent } from './video-games/duck-business/duck-business.component';
import { SharedModule } from '../shared/shared.module';
import { SpaceShooterComponent } from './video-games/space-shooter/space-shooter.component';
import { TheLastJudgmentComponent } from './video-games/the-last-judgment/the-last-judgment.component';
import { UpToHeavenComponent } from './video-games/up-to-heaven/up-to-heaven.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    VideoGamesComponent,
    ApplicationsComponent,
    DiversComponent,
    DuckBusinessComponent,
    SpaceShooterComponent,
    TheLastJudgmentComponent,
    UpToHeavenComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PortfolioModule { }
