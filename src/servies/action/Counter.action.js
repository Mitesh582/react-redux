import { INC, DSC} from '../constant/actionType';

export const increment = (data) => {
    return{
        type: INC,
        payload: data
    }
}

export const decrement = (data) => {
    return{
        type: DSC,
        payload: data
    }
}