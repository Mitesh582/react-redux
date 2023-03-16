import { INC, DSC, LOADING } from '../constant/actionType';

const initialValue = {
    count: 0,
    isLoading: false
}

const incdsc = (state = initialValue, action) => {

    switch (action.type) {
        case INC: {
            return {
                ...state,
                count: state.count + 1,
                isLoading: false
            }
        }
            break;
        case DSC: {
            return {
                ...state,
                count: state.count - 1,
                isLoading: false
            }
        }
            break;
        case LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
            break;
        default:
            return state;
    }
}

export default incdsc;