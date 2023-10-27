"use client"
import Image from 'next/image'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import {signOut} from 'next-auth/react'
import Banner from './components/banner';
import Header from './components/Header';
import {getToken} from 'next-auth/jwt'

export default function Home() {
  const session=useSession();
  const router=useRouter()
  console.log("session",session)
  if(session.data===null){
  router.push('/login')
  }

  return (
   <>
   
  <Header/>
    
  
   </>
  )
}



