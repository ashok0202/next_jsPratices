import React from 'react'
import { useCount } from '../../context/count-context'

const Text:React.FC = () => {

    const {count}=useCount();
  return (
    <p>The count is {count} </p>
  )
}

export default Text
