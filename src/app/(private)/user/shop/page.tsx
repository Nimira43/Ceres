import React from 'react'
import { UserButton } from '@clerk/nextjs'

function UserShop() {
  return (
    <div className='p-5 flex flex-col gap-5'>
      <h1 className='font-bold text-4xl text-primary logo'>Ceres</h1>
      <UserButton />
    </div>
  )
}

export default UserShop
UserShop