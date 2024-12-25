import { Divider } from '@mui/material'
import React from 'react'

const AddressCard = ({ details }) => {
    return (
        <div>
            <div className='mt-5 space-y-2 mb-5'>
                <p className='font-semibold'>
                    <span>{details?.firstName}</span>
                    <span> {details?.lastName}</span>
                </p>
                <p>
                    <span>{details?.streetAddress},{details?.zipCode}</span>
                </p>
                <p>
                    <span>{details?.state},{details?.city}</span>
                </p>
                <div className=''>
                    {/* <p className=''> +91 9876543210</p> */}
                    <div>
                        <span className='font-semibold'>Phone: </span>
                        <span>+91 {details?.phoneNumber}</span>
                    </div>
                    {/* <div>
                        <span className='font-semibold'>Email: </span>
                        <span>ram@gmail.com</span>
                    </div> */}
                </div>
            </div>
            <Divider sx={{ width: '95%' }} />
        </div>
    )
}

export default AddressCard