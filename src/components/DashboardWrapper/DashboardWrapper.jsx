import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const DashboardWrapper = ({children }) => {
  return (
    <Sidebar>
        {children}
    </Sidebar>
      
  )
}

export default DashboardWrapper
