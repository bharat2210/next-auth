
  
import { NextRequest, NextResponse } from "next/server";
import "../../../database/config";
import { UserModel } from "@/models/users";


export  async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const {email,password} = await req.json();
      console.log("body", email);
      const availableuser = await UserModel.findOne({email: email});
      console.log("availableuser", availableuser);
      if(availableuser){
        if(availableuser.password === password){
            return NextResponse.json({message:"Login successful"})
        }else{
            return NextResponse.json({message:"Login failed , Incorrect Credentials"},{status:401})
        }
      }else{
        return NextResponse.json({message:"User not found"},{status:404})
      }

      // You can perform any necessary operations with the request body here.
      // For example, if you are working with MongoDB and Mongoose, you can create and save a document.
// console.log("user console",{users})
//        const data = new users(body);
//       const result = await data.save();
//       const savedData = result.toObject();

      
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error in  Login" });
    }
  } else {
    return NextResponse.json({ message: "Method Not Allowed" });
  }
}

