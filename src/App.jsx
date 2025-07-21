import { useState } from "react"
import ChatBox from "./components/ChatBox"
import ChatResponse from "./components/ChatResponse";

function App() {
  const [streamMode,setStreamMode] = useState(false);
  const [chatResponse,setChatResponse] = useState("");

  return (
    <div className="flex flex-col-reverse justify-start items-center gap-y-10 h-screen pb-2">
      <button onClick={()=>setStreamMode(prev=>!prev)} className={` fixed top-2 right-4 border rounded-lg px-2 py-1 ${streamMode?"text-white bg-black":""} transition-all ease-linear hover:cursor-pointer `}>Stream Mode</button>
      <ChatBox streamMode={streamMode} setChatResponse={setChatResponse}/>
      <ChatResponse chat={chatResponse} />
      <h1 className="sticky top-0 text-9xl text-center">CatChat</h1>
    </div>
  )
}

export default App
