import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GameService } from '../../service/game.service';
import { StageRepository } from '../../store/stage.repository';
import { Stage, createStage } from '../../models/stage';
@Component({
  selector: 'app-game-energylife',
  standalone: true,
  imports: [MatIconModule ,CommonModule, MatTooltipModule],
  templateUrl: './game-energylife.component.html',
  styleUrl: './game-energylife.component.scss'
})
export class GameEnergylifeComponent {

  @Input() health!:number;
  @Input() energy!:number;


  disabled:boolean = false;

  stage!: Stage;
  private readonly gameService = inject(GameService);
 
  constructor( public stageRepository: StageRepository) {
    
    this.stageRepository.getActualStage().subscribe( stage => {
      this.stage = stage;
    })
    
  }

  rest(){
    if(this.stage?.restModifier > 5){
      this.disabled = true;
    }
    if(this.disabled){
      this.disabled = true;
      return;
    }
/*
    this.gameService.rest(this.stage.restModifier).subscribe(restInfo => {
      this.restInfo = restInfo

      this.snackBar.openFromComponent(SnackBarRestComponent,
        {
          data: {
            html: restInfo.message
          },
          politeness: 'polite',
          panelClass: 'snack-bar-rest',
          duration: 7000,
        
          
        }
      
      );
      this.energyModifier.emit(this.restInfo.energyDifference);
      this.healthModifier.emit(this.restInfo.lifeDifference);
      this.disabled = true;
    } );
    
*/
}
}
