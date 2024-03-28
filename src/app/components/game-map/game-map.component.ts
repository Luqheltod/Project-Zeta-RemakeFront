
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-game-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-map.component.html',
  styleUrl: './game-map.component.scss'
})
export class GameMapComponent {
  locationImg : string ="assets/img/";
  buttonTestMsg = "Mostrar Mapa";
  showMap: boolean = false;
  @Input() flat! : string;
  @Input() map! : string;

  toggleMap(){
    this.showMap =!this.showMap;
    this.buttonTestMsg = this.showMap ? "Ocultar Mapa" : "Mostrar Mapa";
  }
}
