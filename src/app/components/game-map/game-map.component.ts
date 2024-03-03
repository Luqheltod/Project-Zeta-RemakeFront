
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
  buttonTestMsg = "";
  showMap: boolean = false;
  @Input() flat : string = 'Piso 3 Habitación 2';
  @Input() map : string = 'habitacion1.png';

  ngOnInit() {
    this.buttonTestMsg = "Mostrar Mapa"
  }
  toggleMap(){
    this.showMap =!this.showMap;
    this.buttonTestMsg = this.showMap ? "Ocultar Mapa" : "Mostrar Mapa";
  }
}
