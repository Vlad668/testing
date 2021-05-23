import {CHANGE_SEARCHFIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FFAILED
} from './constants'
import axios from 'axios'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})


export const setRobotsFromActions = () => async (dispatch) => {
    try{
    dispatch({type:REQUEST_ROBOTS_PENDING});
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    const { data } = res;
    dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data})
    }catch(e){
        dispatch({type:REQUEST_ROBOTS_FFAILED, payload: e})
    }
}