import React,{ useState } from 'react'
import './App.css'
import ImageGenrator from './components/ImageComponent'
import ChatComponent from './components/ChatComponent'
import RecipeGenratorComponent from './components/RecipeGenrateComponent'

function App() {
  const [activeTab, setActiveTab] = useState('image-genrator')
  const handleTabChange=(tab)=>{
    setActiveTab(tab);
  }
  return (
      <div className='App'>
        <button onClick={()=>handleTabChange('chat')}
          className={activeTab==='chat' ?'active':''}>
            Chat</button>
        <button onClick={()=>handleTabChange('image-genrator')}
          className={activeTab==='image-genrator' ?'active':''}>
          Image Genrator</button>
        <button onClick={()=>handleTabChange('recipe-genrator')}
          className={activeTab==='recipe-genrator' ?'active':''}>
            Recipe Genrator</button>
        <div>
          {activeTab=="chat" && <ChatComponent/>}
          {activeTab=="image-genrator" && <ImageGenrator/>}
          {activeTab=="recipe-genrator" && <RecipeGenratorComponent/>}
        </div>
      </div>
      
  )
}

export default App
