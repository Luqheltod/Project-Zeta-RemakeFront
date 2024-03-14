import { createState,createStore, withProps, select } from '@ngneat/elf';
import { selectEntity, selectFirst, setEntities, withEntities } from '@ngneat/elf-entities';
import { Stage, createStage } from '../models/stage';
import { Injectable } from '@angular/core';



const stageStore = createStore(
  { name: 'stage' },
  withEntities<Stage, 'idStage'>({ idKey: 'idStage' })
);

@Injectable({ providedIn: 'root' })
export class StageRepository {

    stage$ = stageStore.pipe(selectFirst());

    updateStage(stage: Stage) {
        stageStore.update(setEntities([createStage(stage)]));
    }

    setStage(idStage: number) {

}

}

