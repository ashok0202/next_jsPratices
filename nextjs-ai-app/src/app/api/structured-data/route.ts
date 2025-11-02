import { NextRequest, NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { streamObject } from "ai";
import { recipeScheme } from "./schema";


export async function POST(req:NextRequest,res:NextResponse) {
    const {dish}=await req.json();

    try{
        const result=streamObject({
            model:google('gemini-2.5-flash'),
            schema:recipeScheme,
            prompt:`Generate a recipe for ${dish}`
        });
        return result.toTextStreamResponse();
    }
    catch(error:any){
        return NextResponse.json({error:"Something went wrong",message:error.message},{status:500});
    }
    
}