"use client"
import { Authoptions, CustomSession } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const session:any =useSession();
  const router=useRouter()
  console.log("session",session);
  // if(session?.data?.user?.role!=="admin"){
  //   router.push('/admin/login')
  //   alert("You are not authorized to access this page")
  // }
  
  return (
    <>
    <div>
        Admin dashboard page
    </div>
    
    </>
  )
}

export default page