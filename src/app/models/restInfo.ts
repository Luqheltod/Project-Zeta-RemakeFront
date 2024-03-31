export interface RestInfo{
    idRestInfo : number,
    message : string,
    energyDifference : number,
    lifeDifference : number,
}

export function createRestInfo(restInfo:RestInfo): RestInfo {
    return {
        idRestInfo : restInfo.idRestInfo,
        message : restInfo.message,
        energyDifference :restInfo.energyDifference,
        lifeDifference : restInfo.lifeDifference
    
    };
  }