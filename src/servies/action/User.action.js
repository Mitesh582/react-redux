import axios from 'axios';
import Api from '../../Apis/FakeApi';
import { type } from '@testing-library/user-event/dist/type';
import { CREATE_USER, GET_USERS, GET_USER, IS_LOADING, UPDATE_USER, DELETE_USER } from '../constant/actionType';

export const createuser = (data) => {
    return {
        type : CREATE_USER,
        payload : data
    }
}
export const createuserAsync = (data) => {

    return async (dispatch) => {
        
        const result = await Api.post("/Users", data)

        dispatch(createuser(data))
    }
}
export const isloading = () => {
    return {
        type: IS_LOADING
    }
}
export const getusers = (data) => {
    return {
        type : GET_USERS,
        payload : data
    }
}
export const getuser = (data) => {
    return {
        type : GET_USER,
        payload : data
    }
}
export const UpdateUser = (data) => {
    return {
        type : UPDATE_USER,
        payload : data
    }
}
export const Deleteuser = (data) => {
    return {
        type : DELETE_USER
    }
}
export const getusersAsync = () => {

    return async dispatch => {
        
        dispatch(isloading())

        const result = await Api.get("/Users")

        dispatch(getusers(result.data))
    }
}
export const getuserAsync = (id) => {

    return async dispatch => {
        
        // dispatch(isloading())

        const result = await Api.get(`/Users/${id}`)

        dispatch(getuser(result.data))
    }
}
export const UpdateuserAsync = (data) => {

    return async dispatch => {
        
        // dispatch(isloading())

        const result = await Api.put(`/Users/${data.id}`, data)
        // console.log(result.data);

        dispatch(getusersAsync(result.data))
    }
}
export const DeleteuserAsync = (id) => {

    return async dispatch => {
        
        dispatch(isloading())

        const result = await Api.delete(`/Users/${id}`)

        dispatch(getusersAsync())
    }
}
