import NextAuth from "next-auth"
import { Authoptions } from "./options"

const handler = NextAuth(Authoptions
 
)

export { handler as GET, handler as POST }