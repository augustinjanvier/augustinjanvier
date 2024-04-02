import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGamesComponent } from './video-games/video-games.component';
import { PortfolioComponent } from './portfolio.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DiversComponent } from './divers/divers.component';
import { DuckBusinessComponent } from './video-games/duck-business/duck-business.component';
import { SpaceShooterComponent } from './video-games/space-shooter/space-shooter.component';
import { TheLastJudgmentComponent } from './video-games/the-last-judgment/the-last-judgment.component';
import { UpToHeavenComponent } from './video-games/up-to-heaven/up-to-heaven.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    title: 'Augustin Janvier - Mes projets',
    children: [
      {
        path: '',
        redirectTo: 'video-games',
        pathMatch: 'full'
      },
      {
        path: 'video-games',
        component: VideoGamesComponent,
        title: 'Augustin Janvier - Mes projets de jeux vidéos'
      },
      {
        path: 'applications',
        component: ApplicationsComponent,
        title: 'Augustin Janvier - Mes projets web & applications'
      },
      {
        path: 'divers',
        component: DiversComponent,
        title: 'Augustin Janvier - Mes projets divers'
      }
    ],
  },
  {
    path: 'project',
    children: [
      {
        path: 'duck-business',
        component: DuckBusinessComponent,
        title: 'Augustin Janvier - Duck Business'
      },
      {
        path: 'space-shooter',
        component: SpaceShooterComponent,
        title: 'Augustin Janvier - Space Shooter'
      },
      {
        path: 'the-last-judgment',
        component: TheLastJudgmentComponent,
        title: 'Augustin Janvier - The Last Judgment'
      },
      {
        path: 'up-to-heaven',
        component: UpToHeavenComponent,
        title: 'Augustin Janvier - Up To Heaven'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
