import { Component } from '@angular/core';
import { GameMapComponent } from '../game-map/game-map.component';
import { GameTextComponent } from '../game-text/game-text.component';
import { GameOptionsComponent } from '../game-options/game-options.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stage-container',
  standalone: true,
  imports: [GameMapComponent,GameTextComponent,GameOptionsComponent,CommonModule],
  templateUrl: './stage-container.component.html',
  styleUrl: './stage-container.component.scss'
})
export class StageContainerComponent {

}
