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

  stage! : Stage ;
  
  ngOnInit() {

    this.stageService.getStageByIdStageAndTapInElf(1).subscribe(stage => {
      this.stage = stage;
      this.stageRepository.updateStage(this.stage);
      this.stageRepository.setStage(1);
    });

   /* this.stageService.getStageByIdStageAndTapInElf(1).subscribe(stage => this.stage = stage);
    
    this.stageRepository.updateStage(this.stage);
    this.stageRepository.setStage(1);
*/
    console.log(this.stage);
  }

  stage2 : Stage = {
    "idStage": 1,
    "text": "Stage 1",
    "mapName": "map1.png",
    "flat": "flat1.png",
    "options": [
      {
        "idOptions": 1,
        "idStage": 1,
        "textOption": "Easy  Writing objects: 100% (5/5), 447 bytes | 223.00 KiB/s, done.",
        "lifedrain": 0,
        "energydrain": 0,
        "toStage": 2,
        "instadeath": false
      },
      {
        "idOptions": 2,
        "idStage": 1,
        "textOption": "Normal   Writing objects: 100% (5/5), 447 bytes | 223.00 KiB/s, done.",
        "lifedrain": 1,
        "energydrain": 1,
        "toStage": 3,
        "instadeath": false
      },
      {
        "idOptions": 3,
        "idStage": 1,
        "textOption": "Hard    Writing objects: 100% (5/5), 447 bytes | 223.00 KiB/s, done.Writing objects: 100% (5/5), 447 bytes | 223.00 KiB/s, done.",
        "lifedrain": 2,
        "energydrain": 2,
        "toStage": 4,
        "instadeath": false
      }
    ],
    "finalStage": false,
    "restModifier": 1
  }
/*
  options : Option =  [
    {
      "idOptions": 1,
      "idStage": 1,
      "textOption": "Easy",
      "lifedrain": 0,
      "energydrain": 0,
      "toStage": 2,
      "instadeath": false
    },
    {
      "idOptions": 2,
      "idStage": 1,
      "textOption": "Normal",
      "lifedrain": 1,
      "energydrain": 1,
      "toStage": 3,
      "instadeath": false
    },
    {
      "idOptions": 3,
      "idStage": 1,
      "textOption": "Hard",
      "lifedrain": 2,
      "energydrain": 2,
      "toStage": 4,
      "instadeath": false
    }
  ];*/


  //Los injects de los servicios 

  //Llamamos akita con cada cosa 

  //recibimos las movidas de vuelta de cada componente y se cambian lo que le pasamos



}
