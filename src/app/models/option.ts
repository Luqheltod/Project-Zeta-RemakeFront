export interface Option{
    idOptions : number,
    idStage : number,
    textOption : string,
    lifedrain : number,
    energydrain : number,
    toStage : number,
    instadeath : boolean,
}

export function createOption(option: Option): Option {
return {
idOptions: option.idOptions,
idStage : option.idStage,
textOption : option.textOption,
lifedrain : option.lifedrain,
energydrain : option.energydrain,
toStage : option.toStage,
instadeath : option.instadeath
};
}