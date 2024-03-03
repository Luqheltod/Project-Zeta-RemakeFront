import { Routes } from '@angular/router';
import { GameTextComponent } from './components/game-text/game-text.component';
import { StageContainerComponent } from './components/stage-container/stage-container.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';

const routeConfig: Routes = [
    {
      path: '',
      component: StartScreenComponent,
      title: 'Proyect Zeta',
    },
    {
      path: 'leproject',
      component: StageContainerComponent,
      title: 'Proyect Zeta ',
    }
  ];
  export default routeConfig;
