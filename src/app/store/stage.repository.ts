import { createState,createStore, withProps, select, setProps } from '@ngneat/elf';
import { selectAllEntities, selectEntity, selectFirst, setEntities, withEntities } from '@ngneat/elf-entities';
import { Stage, createStage } from '../models/stage';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



const stageStore = createStore(
  { name: 'stage' },
  withProps<Stage>(
    {
      idStage: 0,
      text: '',
      mapName: '',
      flat: '',
      options: [],
      finalStage: false,
      restModifier: 0,
    }
  )
);

@Injectable({ providedIn: 'root' })
export class StageRepository {

    //stage$ = stageStore.pipe(selectAllEntities());



    updateStage(stage: Stage) {
        stageStore.update(setProps(createStage(stage )));
    }

    setStage(idStage: number) {

        stageStore.subscribe((state) => {
            console.log(state);
          });
}

}

