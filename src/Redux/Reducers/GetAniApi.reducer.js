const initialState = {
  GetAniApiPending: null,
  GetAniApiSuccess: null,
  GetAniApiError: null,
  GetAniApiMessage: null,
  GetAniApiData: null
}

export default function GetAniApiReducer(state = initialState, action) {
  switch(action.type)
  {
    case "PENDING": {
      return {
        ...state,
        GetAniApiPending: true,
        GetAniApiSuccess: false,
        GetAniApiError: false,
      }
    }

    case "SUCCESS": {
      return {
        ...state,
        GetAniApiPending: false,
        GetAniApiSuccess: true,
        GetAniApiError: false,
        GetAniApiMessage: action.message,
        GetAniApiData: action.data
      }
    } 

    case "ERROR": {
      return{
        ...state,
        GetAniApiPending: false,
        GetAniApiSuccess: false,
        GetAniApiError: true,
        GetAniApiMessage: action.message
      }
    }

    default:
      return state
  }
}