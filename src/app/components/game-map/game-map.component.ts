
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-game-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-map.component.html',
  styleUrl: './game-map.component.scss'
})
export class GameMapComponent {

  buttonTestMsg = "";
  showMap: boolean = false;

  ngOnInit() {
    this.buttonTestMsg = "Mostrar Mapa"
  }
  toggleMap(){
    this.showMap =!this.showMap;
    this.buttonTestMsg = this.showMap ? "Ocultar Mapa" : "Mostrar Mapa";
  }
}
