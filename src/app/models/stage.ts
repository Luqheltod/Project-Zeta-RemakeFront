import { Option,createOption } from "./option";

export interface Stage {
idStage?: number | undefined;
text?: string;
mapName?: string;
flat?: string;
options?: Array<Option>;
finalStage?: boolean;
restModifier: number;
}

export function createStage(stage: Stage): Stage {
return {
    idStage: stage.idStage,
    text: stage.text,
    mapName: stage.mapName,
    flat: stage.flat,
    options: stage.options?.map((option: Option) => createOption(option))?? [],
    finalStage: stage.finalStage,
    restModifier: stage.restModifier,
};
}

export { Option };
