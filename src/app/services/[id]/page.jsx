import React from 'react'
import Servicedata from './Servicedata'

const page = ({ params }) => {
    const id = params.id;
    return (
        <div>
            <Servicedata id={id} />
        </div>
    )
}

export default page