import {CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FFAILED
} from './constants'

const initialSearch = {
    searchFieldFromReducer: ''
}

export const searchRobots = (state=initialSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return  {...state, searchFieldFromReducer:action.payload};
        default:
            return state
    }
}

const initialRobotState = {
    robotsReducer: [],
    isPending:true,
    error:''
}

export const requestRobots = (state=initialRobotState, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending:true}
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robotsReducer: action.payload, isPending: false}
        case REQUEST_ROBOTS_FFAILED:
            return {...state, error:action.payload}
        default:
            return state
    }
}