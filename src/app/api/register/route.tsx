// import { NextRequest,NextResponse } from "next/server";
// import {users} from "@/models/user"

// require('../../../database/config')
// export default async function POST(req:NextRequest, res:NextResponse) {

//       try {
//         const body = await req.json()
//         console.log("body", body);
        
//         // You can perform any necessary operations with the request body here.
//         // For example, if you are working with MongoDB and Mongoose, you can create and save a document.
  
//         // const data = new clients(req.body);
//         // const result = await data.save();
//         // const savedData = result.toObject();
  
//         return NextResponse.json({ message: "Data coming" });
//       } catch (error) {
//         console.error(error);
//         return NextResponse.json({ message: "Error creating client" });
//       }
//     } 
  
import { NextRequest, NextResponse } from "next/server";
import "../../../database/config";
import { UserModel } from "@/models/users";


export  async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      console.log("body", body);

      // You can perform any necessary operations with the request body here.
      // For example, if you are working with MongoDB and Mongoose, you can create and save a document.
// console.log("user console",{users})
       const data = new UserModel(body);
      const result = await data.save();
      const savedData = result.toObject();

      return NextResponse.json({ message: "Data added" });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error creating client" });
    }
  } else {
    return NextResponse.json({ message: "Method Not Allowed" });
  }
}

