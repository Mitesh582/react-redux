import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Counter.css'
import { increment, decrement } from '../../servies/action/Counter.action'

function Counter() {

    const count = useSelector((state) => state.incdsc)

    const dispatch = useDispatch()

  return (
    <>
        <div className='container'>
            <div className='row justify-content-center text-center'>

                <div className='w-2'>
                    <button onClick={() => dispatch(increment())}> + </button>
                </div>
                <div className='w-3'>
                    <h3>
                        {
                            count
                        }
                    </h3>   
                </div>
                <div className='w-2'>
                    <button onClick={() => dispatch(decrement())}> - </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter