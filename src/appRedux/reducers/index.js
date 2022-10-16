import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import SettingsReducer from "../slices/Settings";
import CommonReducer from "../slices/Common";
import RegionReducer from "../slices/Regions";
import UserReducer from "../slices/User";

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        settings: SettingsReducer,
        common: CommonReducer,
        regions: RegionReducer,
        user: UserReducer
    });

export default createRootReducer;
