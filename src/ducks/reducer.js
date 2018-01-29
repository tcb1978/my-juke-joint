const initialState = {
    user: null
}

//action type
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'


export default function(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return { ...state, user: null }
        case LOGIN:
            return { ...state, user: action.payload }
        default:
            return state

    }
}

export const login = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = (user) => {
    return {
        type: LOGOUT,
        payload: user
    }
}