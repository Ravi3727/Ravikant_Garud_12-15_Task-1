import React from 'react'
import Sidebar from './SideBar'
import Dashboard from './Dashboard'

function HomePage() {
  return (
    <>
    

    <div className='flex justify-between w-full h-screen '>
        <div className='w-3/12'>
          <Sidebar/>
        </div>
       <div className='w-full'>
         <Dashboard/>
       </div>
      </div>
    </>
  )
}

export default HomePage