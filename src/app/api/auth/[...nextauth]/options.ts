import { UserModel } from "@/models/users";
import { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

require('../../../../database/config')
export const Authoptions:AuthOptions={
    pages:{
        signIn:'/login'

    },
    callbacks:{
      async signIn({ user, account, profile, email, credentials }) {
        require('../../../../database/config')
        try {
       
          const findUser = await UserModel.findOne({ email: user?.email});
          if (findUser) {
            console.log("user found")
            return true;
          }
          await UserModel.create({name:user?.name,email:user?.email})
          console.log("user created")
          return true; 
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false; 
        }
      },
    },
    providers:[
    CredentialsProvider({
        name:'next-auth',
        credentials:{
            email:{
                label:"Email",
                type:"email",
                placeholder:"Enter your email address",

            },
            password:{
                label:"Password",
                type:"password",
                placeholder:"Enter your password",
            }
        },
        async authorize(credentials,req){
          const User= await UserModel.findOne({email:credentials?.email})
                if(User){
                    console.log("user object",User)
                    return User
                }else{
                    return null
                }
        }
    }),
    GithubProvider({
      clientId:"737e7686f1922f3e13be",
      clientSecret:"6a33683ade24d3f0cb087ab049b442c330ba11b3"
    })

]
    
}