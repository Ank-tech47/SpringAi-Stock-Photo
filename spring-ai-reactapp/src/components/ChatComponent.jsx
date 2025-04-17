import React, { useState } from "react";
import '../App.css';

function ChatComponent(){
    const[prompt,setPrompt]=useState('');
    const[chatResponse,setChatResponse]=useState('');
    const askAI = async ()=>{
        try{
            const response = await fetch (`http://localhost:8080/api/ai/v1/ask-ai?prompt=${prompt}`)
            const dataResponse = await response.text();
            setChatResponse(dataResponse);
        }
        catch(e){
            console.error("Error Genrating Response: ",error);
        };  
    }
    return (
        <div>
            <h2>Talk To AI</h2>
            <input
            type="text"
            value={prompt}
            onChange={(e)=>setPrompt(e.target.value)}
            placeholder="Enter a prompt for AI"
            />
            <button onClick={askAI}>Ask AI</button>
            <div>
                <div
                className="output"
                >
                <p>{chatResponse}</p>
                </div>
            </div>
        </div>
    )

}
export default ChatComponent;