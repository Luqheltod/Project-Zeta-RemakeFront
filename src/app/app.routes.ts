import { Routes } from '@angular/router';
import { GameTextComponent } from './components/game-text/game-text.component';
import { StageContainerComponent } from './components/stage-container/stage-container.component';

const routeConfig: Routes = [
    {
      path: '',
      component: StageContainerComponent,
      title: 'Proyecto Zeta',
    }
  
  ];
  export default routeConfig;
