import { INC, DSC} from '../constant/actionType';

const incdsc = (state = 0, action) => {

    switch (action.type) {
        case INC:{
            return state + 1;
        }   
        break;
        case DSC:{
            if (state > 0){
                return state - 1;
            }
        }
        break;
        default:
            return state;
    }
}

export default incdsc;