"use client"
import { Authoptions, CustomSession } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const session =useSession()
  console.log("session",session)
  return (
    <>
    <div>
        Admin dashboard page
    </div>
    
    </>
  )
}

export default page