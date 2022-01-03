import React from 'react'

export default function Footer(props) {
    return (
        <div className='row fixed-bottom'>
            <button className='btn btn-danger col-4' onClick={()=>props.resetQuantity()}>Reset</button>
            <div className='col-4 btn btn-success text-white text-center'>{props.totalAmount}  </div>
            <button className='btn btn-primary col-4'>Pay Now</button>
        </div>
    )
}
