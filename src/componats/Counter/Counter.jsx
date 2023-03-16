import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Counter.css'
import { incrementAsync, decrementAsync } from '../../servies/action/Counter.action'

function Counter() {

    const {count} = useSelector((state) => state.incdsc)
    const {isLoading} = useSelector((state) => state.incdsc)

    const dispatch = useDispatch()

  return (
    <>
        <div className='container'>
            <div className='row justify-content-center text-center'>

                <div className='w-2'>
                    
                    <button onClick={() => dispatch(incrementAsync())}> + </button>
                </div>
                <div className='w-3'>
                    {
                        isLoading ? <h2> Loading... </h2> : <h3> Count = { count } </h3>
                    } 
                </div>
                <div className='w-2'>
                    <button onClick={() => dispatch(decrementAsync())}> - </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter