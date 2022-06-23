import * as actions from "../Actions/type";

const initialState = {
        theme: 'dark'
    };

const rootReducer = (state=initialState, action) =>{
    switch (action.type){
        case actions.CHANGE_THEME:{
            return {
                ...state,
                theme: action.payload.theme
            }
        }
        default: return state;
    }
}
export default rootReducer;