import { combineReducers } from "redux";
import github from "./githup";


const rootReducer = combineReducers({
    github  
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>