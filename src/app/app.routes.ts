import { Routes } from '@angular/router';
import { GameTextComponent } from './components/game-text/game-text.component';
import { StageContainerComponent } from './components/stage-container/stage-container.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';

const routeConfig: Routes = [
    {
      path: '',
      component: StartScreenComponent,
      title: 'Proyecto Zeta',
    },
    {
      path: 'leproject',
      component: StageContainerComponent,
      title: 'Pesadilla',
    }
  ];
  export default routeConfig;
