import axios from "axios";
import { GetAniApiActionError, GetAniApiActionPending, GetAniApiActionSuccess } from "../Redux/Actions/GetAniApi.action";

export default function getAniApi(dispatch, payload){
  dispatch(GetAniApiActionPending())
  axios
  .get(`https://api.aniapi.com/v1/anime?page=${payload.page}`)
  .then(res => dispatch(GetAniApiActionSuccess(res.data)))
  .catch(err => dispatch(GetAniApiActionError(err)))
}