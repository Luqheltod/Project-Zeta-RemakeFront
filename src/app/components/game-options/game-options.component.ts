import { Component } from '@angular/core';

@Component({
  selector: 'app-game-options',
  standalone: true,
  imports: [],
  templateUrl: './game-options.component.html',
  styleUrl: './game-options.component.scss'
})
export class GameOptionsComponent {


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
