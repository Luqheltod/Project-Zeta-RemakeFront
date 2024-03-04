import { Component, Input } from '@angular/core';
import { Option } from '../../models/option';
import { Stage } from '../../models/stage';


@Component({
  selector: 'app-game-options',
  standalone: true,
  imports: [],
  templateUrl: './game-options.component.html',
  styleUrl: './game-options.component.scss'
})
export class GameOptionsComponent {




  @Input() stage! : Stage;
  buttonTestMsg = "";
  showActions: boolean = false;

  ngOnInit() {
    this.buttonTestMsg = "Mostrar Acciones"
  }
  toggleActions(){
    if(!this.showActions){
    this.showActions =!this.showActions;
    this.buttonTestMsg = this.showActions ? "Toma tu decisión" : "Mostrar Acciones";
    }
  }
}


