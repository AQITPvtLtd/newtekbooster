import React from 'react'
import Servicedata from './Servicedata'

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <Servicedata url={url} />
    </div>
  )
}

export default page