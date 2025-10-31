import { NextRequest, NextResponse } from "next/server";
import { streamText, UIMessage } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { prompt  } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-flash"),
      prompt: prompt ,
    });

    // this promise will resolve when the stream is done this usage is usefull for the cost estimation
    result.usage.then((usage)=>{
      console.log({
        inputTokens:usage.inputTokens,
        outputTokens:usage.outputTokens,
        totalTokens:usage.totalTokens
      })
    })
    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong", message: error.message },
      { status: 500 }
    );
  }
}
