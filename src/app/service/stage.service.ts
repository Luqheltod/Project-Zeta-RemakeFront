import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Stage } from "../models/stage";
import { Observable, tap } from "rxjs";
import { StageRepository } from "../store/stage.repository";

@Injectable({providedIn: 'root'})
export class StageService {
  constructor(private http: HttpClient, private stageRepository : StageRepository) {}


  

  getStageByIdStageAndTapInElf(idStage : number): Observable<Stage> {
    idStage = 1;
    return this.http.get<Stage>(`http://localhost:8080/projectz/stage/${idStage}`).pipe( 
      tap((stage) => {
      this.stageRepository.updateStage(stage);
    })
  );
}
  }






