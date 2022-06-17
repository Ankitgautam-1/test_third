import { CLEAR_USER, SET_USER } from "./userActions";

interface Action{
    type: string;
    payload: any;
}
const initialState ={}
const userReducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case SET_USER:
        return action.payload;
        case CLEAR_USER:
        return {};
        default:
        return state;
    }
}

export default userReducer;