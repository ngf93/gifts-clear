import React from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2, FiEdit3 } from "react-icons/fi"

const Address = (props) => {
    return (
        <div className='address mt-4'>
            <div className='flex-1'>
                <h6 className='mb-1'>{props.title}</h6>
                <p>{props.address}</p>
            </div>
            <Link to='edit'><FiEdit3/></Link>
            <button type='button' className='ms-4'><FiTrash2/></button>
        </div>
    );
};

export default Address;