
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest,res:NextResponse) {
    try{
        
        return NextResponse.json({success:"Message sent successfully"},{status:200})
    }catch(error:any){
        return NextResponse.json({error:"Something went wrong",message:error.message},{status:500})
    }
}