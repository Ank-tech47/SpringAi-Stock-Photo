import React, { useState } from "react";
import '../App.css';

function ImageGenrator(){
    const[prompt,setPrompt]=useState('');
    const[imageUrls,setImageUrls]=useState([]);
    const genrateImage= async ()=>{
        try{
            const response = await fetch (`http://localhost:8080/api/ai/v1/genrate-image?prompt=${prompt}`)
            const urls = await response.json();
            setImageUrls(urls);
        }
        catch(e){
            console.error("Error Genrating Response: ",error);
        };    
    };
    return(
        <div className="tab-content">
            <h2>Genrate Image</h2>
        <input
        type="text"
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Enter a prompt for image"
        >
        </input>
        <button onClick={genrateImage}>Genrate Image</button>
        <div className="image-grid">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`} />
                ))}
                {[...Array(4 - imageUrls.length)].map((_, index) => (
                    <div key={index + imageUrls.length} className="empty-image-slot"></div>
                ))}
            </div>
        </div>
    )
}
export default ImageGenrator;