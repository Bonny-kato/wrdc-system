import * as actions from "./type";

export const changeTheme = theme => ({
    type: actions.CHANGE_THEME,
    payload: {
        theme
    }
})

