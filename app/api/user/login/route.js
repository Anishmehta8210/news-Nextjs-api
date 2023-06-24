import User from "@/app/models/User";
import { NextResponse } from "next/server";
import {serialize} from "cookie"
import { sign } from "jsonwebtoken";
import bycrypt from "bcryptjs"


export async function POST(request){
    const {email,password} = await request.json();
    console.log(email,password)

    const user = await User.findOne({email:email})
    if(user){

        // login and token successfully
        const ispassword = await bycrypt.compare(password,user.password)

        if(ispassword){
            const token = sign({_id:user._id},"hvdfhsdhfh")
            const serialized = serialize("cookie_name",token,{
                httpOnly:true
            })
           
            return new NextResponse(JSON.stringify({user,msg:"logined"}),
            {
                headers:{
                    "Set-Cookie":serialized
                }
            }
            )
        }
        else{
            return NextResponse.json({msg:"wrong email or password"})
        }

    }
    else{
        return NextResponse.json({msg:"this is email is not matched with database"})
    }
}