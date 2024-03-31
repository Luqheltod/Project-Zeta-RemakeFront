import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { Option } from '../../models/option';
import { Stage } from '../../models/stage';
import { StageRepository } from '../../store/stage.repository';
import { StageService } from '../../service/stage.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-game-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-options.component.html',
  styleUrl: './game-options.component.scss'
})
export class GameOptionsComponent {
 
  disabled : boolean = false ;
  

  @Input() stage!:Stage;

  @Output() healthModifier: EventEmitter<number> = new EventEmitter<number>();
  @Output() energyModifier: EventEmitter<number> = new EventEmitter<number>();
  @Output() instadeath : EventEmitter<number> = new EventEmitter<number>();

  

  buttonTestMsg = "Mostrar Acciones";
  showActions: boolean = false;

  private readonly stageService = inject(StageService);

  constructor( public stageRepository: StageRepository) {
   
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['stage']){
      this.disabled = false;
      this.showActions = false;
    }
  }

  toggleActions(){
    if(!this.showActions){
    this.showActions =!this.showActions;
    this.buttonTestMsg = this.showActions ? "Toma tu decisión" : "Mostrar Acciones";
    }
  }

  nextStage(option : Option): void{

    if(option.instadeath) {
      
      this.instadeath.emit(option.idOptions);
      return;
    }

    this.energyModifier.emit(option.energydrain);
    this.healthModifier.emit(option.lifedrain);
  
    this.stageService.getAndStoreStageById(option.toStage).subscribe();


  }

}


