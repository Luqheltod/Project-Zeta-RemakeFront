import { Component } from '@angular/core';
import { GameMapComponent } from '../game-map/game-map.component';
import { GameTextComponent } from '../game-text/game-text.component';
import { GameOptionsComponent } from '../game-options/game-options.component';
import { CommonModule } from '@angular/common';
import { Stage, Option } from '../../models/stage';

@Component({
  selector: 'app-stage-container',
  standalone: true,
  imports: [GameMapComponent,GameTextComponent,GameOptionsComponent,CommonModule],
  templateUrl: './stage-container.component.html',
  styleUrl: './stage-container.component.scss'
})
export class StageContainerComponent {


  stage : Stage = {
    "idStage": 1,
    "text": "Stage 1",
    "mapName": "map1.png",
    "flat": "flat1.png",
    "options": [
      {
        "idOptions": 1,
        "idStage": 1,
        "textOption": "Easy  Writing objects: 100% (5/5), 447 bytes | 223.00 KiB/s, done.",
        "lifedrain": 0,
        "energydrain": 0,
        "toStage": 2,
        "instadeath": false
      },
      {
        "idOptions": 2,
        "idStage": 1,
        "textOption": "Normal   Writing objects: 100% (5/5), 447 bytes | 223.00 KiB/s, done.",
        "lifedrain": 1,
        "energydrain": 1,
        "toStage": 3,
        "instadeath": false
      },
      {
        "idOptions": 3,
        "idStage": 1,
        "textOption": "Hard    Writing objects: 100% (5/5), 447 bytes | 223.00 KiB/s, done.Writing objects: 100% (5/5), 447 bytes | 223.00 KiB/s, done.",
        "lifedrain": 2,
        "energydrain": 2,
        "toStage": 4,
        "instadeath": false
      }
    ],
    "finalStage": false,
    "restModifier": 1
  }

  options : Option[] | undefined =  [
    {
      "idOptions": 1,
      "idStage": 1,
      "textOption": "Easy",
      "lifedrain": 0,
      "energydrain": 0,
      "toStage": 2,
      "instadeath": false
    },
    {
      "idOptions": 2,
      "idStage": 1,
      "textOption": "Normal",
      "lifedrain": 1,
      "energydrain": 1,
      "toStage": 3,
      "instadeath": false
    },
    {
      "idOptions": 3,
      "idStage": 1,
      "textOption": "Hard",
      "lifedrain": 2,
      "energydrain": 2,
      "toStage": 4,
      "instadeath": false
    }
  ];
  //Los injects de los servicios 

  //Llamamos akita con cada cosa 

  //recibimos las movidas de vuelta de cada componente y se cambian lo que le pasamos



}
