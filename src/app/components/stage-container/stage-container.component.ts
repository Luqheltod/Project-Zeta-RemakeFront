import { Component, inject } from '@angular/core';
import { GameMapComponent } from '../game-map/game-map.component';
import { GameTextComponent } from '../game-text/game-text.component';
import { GameOptionsComponent } from '../game-options/game-options.component';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GameEnergylifeComponent } from '../game-energylife/game-energylife.component';
import { slideInAnimation } from '../../shared/animation';
import { Stage } from '../../models/stage';
import { Option } from '../../models/option';
import { StageRepository } from '../../store/stage.repository';
import { StageService } from '../../service/stage.service';
import { InstadeathDialogComponent } from '../../shared/instadeath-dialog/instadeath-dialog.component';
import { GameService } from '../../service/game.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-stage-container',
  standalone: true,
  imports: [GameMapComponent,GameTextComponent,GameOptionsComponent,CommonModule,GameEnergylifeComponent,RouterModule],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
  templateUrl: './stage-container.component.html',
  styleUrl: './stage-container.component.scss'
})
export class StageContainerComponent {
  
  private readonly stageService = inject(StageService);
  private readonly gameService = inject(GameService);

  constructor( public stageRepository: StageRepository,public dialog: MatDialog,private router: Router) { }


  health : number = 120;
  energy : number = 165;
  playerIsDeath : boolean = false;
  
  ngOnInit() {

    this.stageService.getAndStoreStageById(1).subscribe();

  
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
    this.gameService.getInstadeathInfo(idOptions).subscribe( instadeathInfo => {
      var message = instadeathInfo.message;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.enterAnimationDuration='2500ms';
      dialogConfig.exitAnimationDuration='1500ms';
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
        this.router.navigate(['/']);
      })
    });
      this.playerIsDeath = true;
 
  }






}
