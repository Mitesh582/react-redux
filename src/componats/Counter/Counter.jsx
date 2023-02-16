import React from 'react'
import { useSelector } from 'react-redux'
import './Counter.css'

function Counter() {

    const count = useSelector((state) => state.incdsc)

    console.log(count, ">>>>");

  return (
    <>
        <div className='container'>
            <div className='row justify-content-center text-center'>

                <div className='w-2'>
                    <button> + </button>
                </div>
                <div className='w-3'>
                    <h3>
                        {
                            count
                        }
                    </h3>
                </div>
                <div className='w-2'>
                    <button> - </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter