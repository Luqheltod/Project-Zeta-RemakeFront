import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GameService } from '../../service/game.service';
import { StageRepository } from '../../store/stage.repository';
import { Stage, createStage } from '../../models/stage';
import { RestInfo } from '../../models/restInfo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarRestComponent } from '../../shared/snack-bar-rest/snack-bar-rest.component';
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
  @Input() flat!:string;
  @Output() healthModifier: EventEmitter<number> = new EventEmitter<number>();
  @Output() energyModifier: EventEmitter<number> = new EventEmitter<number>();

  disabled:boolean = false;
  flatOfRest : string = "";

  stage!: Stage;
  restInfo! : RestInfo | undefined;
  private readonly gameService = inject(GameService);
 
  constructor( public stageRepository: StageRepository,private readonly snackBar: MatSnackBar,  ) {
    
    this.stageRepository.getActualStage().subscribe( stage => {
      this.stage = stage;
    })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['flat']){
      if(this.allowedToRest(this.flat)){
        this.disabled = false;
      }
      
    }
  }

  rest(){
    if(this.disabled){
      return;
    }

    this.flatOfRest = this.flat;

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
    

}

/** Si es un piso distinto al cual descansó, permitimos descansar */
 allowedToRest(flat:string) : boolean {
   // Utilizamos match para buscar la primera secuencia de caracteres que no sean números
   const match = flat.match(/^[^\d]+/);
  // Utilizamos una expresión regular para extraer el texto hasta el primer número
   const actualFlat = match ? match[0].trim() : "";
   const esVestibulo = actualFlat.toLowerCase() === 'vestibulo';

   if(this.flatOfRest !== actualFlat  || esVestibulo ){
    return true;
   } else{
    return false;
   }

}

}
