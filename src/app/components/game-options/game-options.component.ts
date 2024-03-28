import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Option } from '../../models/option';
import { Stage } from '../../models/stage';
import { StageRepository } from '../../store/stage.repository';
import { StageService } from '../../service/stage.service';


@Component({
  selector: 'app-game-options',
  standalone: true,
  imports: [],
  templateUrl: './game-options.component.html',
  styleUrl: './game-options.component.scss'
})
export class GameOptionsComponent {

  

  @Input() stage!:Stage;

  @Output() healthModifier: EventEmitter<number> = new EventEmitter();
  @Output() energyModifier: EventEmitter<number> = new EventEmitter();
 // @Output() instadeath : EventEmitter<number> = new EventEmitter();

  buttonTestMsg = "";
  showActions: boolean = false;

  private readonly stageService = inject(StageService);

  constructor( public stageRepository: StageRepository) { }
  ngOnInit() {
    this.buttonTestMsg = "Mostrar Acciones"
  }
  toggleActions(){
    if(!this.showActions){
    this.showActions =!this.showActions;
    this.buttonTestMsg = this.showActions ? "Toma tu decisión" : "Mostrar Acciones";
    }
  }

  nextStage(option : Option): void{

    if(option.instadeath) {
      
      //this.instadeath.emit(option.idOptions);
      return;
    }

    this.energyModifier.emit(option.energydrain);
    this.healthModifier.emit(option.lifedrain);
  
    this.stageService.getAndStoreStageById(option.toStage).subscribe();


  }

}


