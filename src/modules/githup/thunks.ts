import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { getUserProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfileAsync } from "./actions";

// export function getUserProfileThunk(username: string){
//     return async (dispatch: Dispatch) => {
//         const { request, success, failure } = getUserProfileAsync;
//         dispatch(request());

//         try{
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile));
//         }catch(e){
//             if ((<any>e).isAxiosError) { 
//               dispatch(failure(<AxiosError>e));
//             }
//         }
//     }
// }

export const getUserProfileThunk = createAsyncThunk(
    getUserProfileAsync,
    getUserProfile
)