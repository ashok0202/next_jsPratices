

import React from 'react'

const PrivateRoute:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute;
