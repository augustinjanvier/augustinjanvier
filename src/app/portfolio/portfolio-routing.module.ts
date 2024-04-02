import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGamesComponent } from './video-games/video-games.component';
import { PortfolioComponent } from './portfolio.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DiversComponent } from './divers/divers.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: 'video-games',
        component: VideoGamesComponent
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      },
      {
        path: 'divers',
        component: DiversComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
