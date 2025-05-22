import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

async function UserShop() {
  const user = await currentUser()
  console.log(user)

  return (
    <div className='p-5 flex flex-col gap-5'>
      <h1 className='font-bold text-4xl text-primary logo'>Ceres</h1>
      <UserButton />
      <div className='flex flex-col gap-2'>
        <h1>Clerk User Id: {user?.id}</h1>
        <h1>Clerk User Email: {user?.emailAddresses[0].emailAddress}</h1>
      </div>
    </div>
  )
}

export default UserShop
