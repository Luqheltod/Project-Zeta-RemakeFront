import { Component, Input } from '@angular/core';
import { Option } from '../../models/option';
import { Stage } from '../../models/stage';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-game-options',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './game-options.component.html',
  styleUrl: './game-options.component.scss'
})
export class GameOptionsComponent {


  health:Number=100;
  energy:Number=100;

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


