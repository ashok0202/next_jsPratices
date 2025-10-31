import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import {google} from "@ai-sdk/google"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { text } = await generateText({
     // model: openai("gpt-4.1-nono"),
     model: google('gemini-2.5-flash'),
      prompt: "Explain What an LLM is in simple terms",
    });
    return NextResponse.json({
      status: 200,
      success: "Message sent successfully",
      data: text,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong", message: error.message },
      { status: 500 }
    );
  }
}
