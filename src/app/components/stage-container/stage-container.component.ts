import { Component, inject } from '@angular/core';
import { GameMapComponent } from '../game-map/game-map.component';
import { GameTextComponent } from '../game-text/game-text.component';
import { GameOptionsComponent } from '../game-options/game-options.component';
import { CommonModule } from '@angular/common';


import { GameEnergylifeComponent } from '../game-energylife/game-energylife.component';
import { slideInAnimation } from '../../shared/animation';
import { Stage } from '../../models/stage';
import { Option } from '../../models/option';
import { StageRepository } from '../../store/stage.repository';
import { StageService } from '../../service/stage.service';

@Component({
  selector: 'app-stage-container',
  standalone: true,
  imports: [GameMapComponent,GameTextComponent,GameOptionsComponent,CommonModule,GameEnergylifeComponent],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
  templateUrl: './stage-container.component.html',
  styleUrl: './stage-container.component.scss'
})
export class StageContainerComponent {
  
  private readonly stageService = inject(StageService);
 

  constructor( public stageRepository: StageRepository) { }

  //stage! : Stage ;
  
  ngOnInit() {

    this.stageService.getStageByIdStageAndTapInElf(1).subscribe();

    /*this.stageService.getStageByIdStageAndTapInElf(1).subscribe(stage => {
      this.stage = stage;
      this.stageRepository.updateStage(this.stage);
      this.stageRepository.getStage();
    });*/

   /* this.stageService.getStageByIdStageAndTapInElf(1).subscribe(stage => this.stage = stage);
    
    this.stageRepository.updateStage(this.stage);
    this.stageRepository.setStage(1);
*/
    //console.log(this.stage);
  }

 



  //Los injects de los servicios 

  //Llamamos akita con cada cosa 

  //recibimos las movidas de vuelta de cada componente y se cambian lo que le pasamos



}
