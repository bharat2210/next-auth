
import {getToken} from 'next-auth/jwt'

import {NextRequest,NextResponse} from 'next/server'
import { Customuser } from './app/api/auth/[...nextauth]/options'




export default async function middleware(request:NextRequest) {
    const {pathname}=request.nextUrl

    if(pathname=='/login' || pathname=='/admin/login'){
        return NextResponse.next()
    }

    const token = await getToken({req:request})
   console.log("token",token)

    // Protected routes for user
    const userprotectedroutes=['/']

        // Protected routes for admin
        const adminprotectedroutes=['/admin/dashboard']
        if(token==null && userprotectedroutes.includes(pathname)|| adminprotectedroutes.includes(pathname)){
          return NextResponse.redirect(new URL('/login',request.url))
        }
        // Get user
        const user:Customuser|null= token?.user as Customuser

        // if user try to acces admin routes
        if(adminprotectedroutes.includes(pathname) && user?.role=="user"){
            return NextResponse.redirect(new URL('/admin/login',request.url))
        }
}