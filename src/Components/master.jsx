import React from 'react'
import { useParams } from 'react-router-dom'

const Master = () => {
    const { type } = useParams();
  return (
    <div>
        <h3>{type}</h3>
    </div>
  )
}

export default Master;