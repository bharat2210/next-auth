"use client"
import React from 'react'
import {SessionProvider} from 'next-auth/react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({children}:{children:React.ReactNode}) => {

  
  return (
    <>
       <ToastContainer
        position="top-center"
        autoClose={4000}
        style={{ zIndex:9999999999}}
      />
    <SessionProvider>

    {children}
    </SessionProvider>
    
    
    </>
  )
}

export default Layout