import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";
import { projectReducer } from "./projectReducer";
import { activityReducer } from "./activityReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    projects: projectReducer,
    activities: activityReducer,
});