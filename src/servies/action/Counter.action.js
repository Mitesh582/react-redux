import { INC, DSC, LOADING } from '../constant/actionType';

export const increment = (data) => {
    return {
        type: INC,
        payload: data
    }
}

export const incrementAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(increment())
        }, 5000)
    }
}

export const decrement = (data) => {
    return {
        type: DSC,
        payload: data
    }
}

export const decrementAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(decrement())
        }, 2000)
    }
}

export const loading = () => {
    return {
        type: LOADING
    }
}
