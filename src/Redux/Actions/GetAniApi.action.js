export function GetAniApiActionPending(){
  return{
    type: "PENDING"
  }
}

export function GetAniApiActionSuccess(args){
  return{
    type: "SUCCESS",
    data: args.data,
    message: args.message
  }
}

export function GetAniApiActionError(args){
  return {
    type: "ERROR",
    message: args.message
  }
}