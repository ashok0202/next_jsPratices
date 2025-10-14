"use client";
import { Conversation, ConversationContent, ConversationScrollButton } from '@/components/ai-elements/conversation';
import { PromptInput, PromptInputBody, PromptInputSubmit, PromptInputTextarea, PromptInputToolbar, PromptInputTools } from '@/components/ai-elements/prompt-input';
import React, { useState ,Fragment} from 'react'
import { useChat } from "@ai-sdk/react";

const RagChatBot:React.FC = () => {

    const [input,setInput] = useState<string>("");

    const handleSubmit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);
    }

    const{messages,sendMessage,status} =useChat();
  return (

    <div className='max-w-4xl mx-auto p-6 relative size-full h-[calc(100vh)]'>
        <div className='flex flex-col h-full'>
            <Conversation className='h-full'>
                <ConversationContent > Message will go here </ConversationContent>
                <ConversationScrollButton/>
            </Conversation>
            <PromptInput className='mt-4'>
                <PromptInputBody>
                    <PromptInputTextarea value={input} onChange={handleSubmit}/>
                </PromptInputBody>
                <PromptInputToolbar>
                    <PromptInputTools>
                        {/* Model selector will go here */}
                    </PromptInputTools>
                    <PromptInputSubmit/>
                </PromptInputToolbar>
            </PromptInput>
        </div>
      
    </div>
  )
}

export default RagChatBot;
