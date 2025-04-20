import { NextRequest,NextResponse } from "next/server";
import { PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";   
import { sendEmail } from "@/helpers/mailer";

const prisma = new PrismaClient();

export async function POST(req:NextRequest,res:NextResponse) {
    try {
        const reqBody = await req.json();
        const {username,email,password}=reqBody;

        //check if user already exists
        const userExists = await prisma.user.findFirst({where:{email}});
        if(userExists){
            return NextResponse.json({error:"User already exists"},{status:400});
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password,10);

        //create user
        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword}
        });
        console.log("Saved user");

        await sendEmail({email,emailType:"VERIFY",userId:newUser.id.toString() //send verify email
        });
        console.log("Email sent");
        return NextResponse.json({success:"User created successfully",user:newUser},{status:201});
        
    } catch (error:any) {  {
        return NextResponse.json({error:"Something went wrong",message:error.message},{status:500});
        
    }

    }
}