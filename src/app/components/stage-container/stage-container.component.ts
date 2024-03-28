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
 
  health : number = 120;
  energy : number = 165;

  constructor( public stageRepository: StageRepository) { }

  //stage! : Stage ;
  
  ngOnInit() {

    this.stageService.getAndStoreStageById(1).subscribe();

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

  energyModify(energyModifier : number){
    this.energy += energyModifier;
    if(this.energy<0){
      this.deathForOption(0)
    }
  }

  healthModify(healthModifier : number){
    this.health += healthModifier;
    if(this.health<0){
      this.deathForOption(0)
    }
  }

  deathForOption(idOptions : number) {
   /*
    this.gameService.getInstadeathInfo(idOptions).subscribe( instadeathInfo => {
      var message = instadeathInfo.message;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.width = "500px";
      dialogConfig.height = "541px";
      dialogConfig.panelClass = "instadeath-dialog-container";
      
      
      dialogConfig.data = {
        message: message,
        
      };
      this.dialog.open(InstadeathDialogComponent, dialogConfig);
      this.dialog.afterAllClosed.subscribe( resp =>{
        localStorage.clear();
        window.location.reload();
      })
    });
*/
    console.log(idOptions);
  }



  //Los injects de los servicios 

  //Llamamos akita con cada cosa 

  //recibimos las movidas de vuelta de cada componente y se cambian lo que le pasamos



}
