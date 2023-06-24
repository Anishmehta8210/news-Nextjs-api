import Post from "@/app/models/Post"
import Dbconnect from "@/app/utils/Dbconnect";
import { NextResponse } from "next/server";


Dbconnect()

// Singleview
export async function GET(req,{params}){
    let {postid} = params;
    const data = await Post.findById(postid)
    return NextResponse.json({data})

}
// Delete
export async function DELETE(req,{params}){
    let {postid} = params;
    let data = await Post.findByIdAndDelete(postid);
    return NextResponse.json({data,"msg":"data deleted successfully"})


}
// Update
export async function PUT(req, { params }) {
    let { postid } = params
    let data = await req.json();
    let updatedData;
    try {
        updatedData = await Post.findByIdAndUpdate(postid, data);
    }catch(e){
        return NextResponse.json({ "msg": e.message })
    }
    return NextResponse.json({ updatedData, "msg": "data update successfully." })
}