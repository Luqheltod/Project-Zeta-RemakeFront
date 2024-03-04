import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-game-energylife',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './game-energylife.component.html',
  styleUrl: './game-energylife.component.scss'
})
export class GameEnergylifeComponent {


  health:Number=100;
  energy:Number=100;
}
