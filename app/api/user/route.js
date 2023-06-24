import User from "@/app/models/User";
import Dbconnect from "@/app/utils/Dbconnect";
import { NextResponse } from "next/server";



Dbconnect()
export async function POST(req){
    let {name,email,password} = await req.json();

    let userData = new User({name,email,password})

    try{
        await userData.save();
        return NextResponse.json({userData,"msg":"created successfully"})

    }
    catch{e}{
        throw new Error(e.message)
        
        return NextResponse.json({"msg":"something went wrong"})
    }

}