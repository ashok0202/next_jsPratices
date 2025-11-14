import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { experimental_transcribe as transcribe } from "ai";
//Provider	Model
// OpenAI	whisper-1
// OpenAI	gpt-4o-transcribe
// OpenAI	gpt-4o-mini-transcribe
// ElevenLabs	scribe_v1
// ElevenLabs	scribe_v1_experimental
// Groq	      whisper-large-v3-turbo
// Groq	      distil-whisper-large-v3-en
// Groq	      whisper-large-v3
// Azure     OpenAI	     whisper-1
// Azure    OpenAI         	gpt-4o-transcribe
// Azure    OpenAI      	gpt-4o-mini-transcribe
// Rev.ai	machine
// Rev.ai	low_cost
// Rev.ai	fusion
// Deepgram	base (+ variants)
// Deepgram	enhanced (+ variants)
// Deepgram	nova (+ variants)
// Deepgram	nova-2 (+ variants)
// Deepgram	nova-3 (+ variants)
// Gladia	default
// AssemblyAI	best
// AssemblyAI	nano
// Fal	whisper
// Fal	wizper

export async function POST(req: Request) {
  try {
    // Get the audio file from the request
    const formData = await req.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return new Response("No audio file provided", { status: 400 });
    }

    // Convert File to Uint8Array
    const arrayBuffer = await audioFile.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Transcribe the audio
    const transcript = await transcribe({
      model: openai.transcription("whisper-1"),
      audio: uint8Array,
    });

    // Return the transcript data
    return Response.json(transcript);
  } catch (error) {
    console.error("Error transcribing audio:", error);
    return new Response("Failed to transcribe audio", { status: 500 });
  }
}
