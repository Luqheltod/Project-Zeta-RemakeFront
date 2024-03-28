import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-game-energylife',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './game-energylife.component.html',
  styleUrl: './game-energylife.component.scss'
})
export class GameEnergylifeComponent {

  @Input() health!:number;
  @Input() energy!:number;

}
