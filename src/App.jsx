import { useState } from "react"
import ChatBox from "./components/ChatBox"
import ChatResponse from "./components/ChatResponse";

function App() {
  const [chatResponse,setChatResponse] = useState("");

  return (
    <div className="flex flex-col justify-start items-center gap-y-10 h-screen">
      <h1 className=" text-9xl text-center">CatChat</h1>
      <ChatBox setChatResponse={setChatResponse}/>
      <ChatResponse chat={chatResponse} />
    </div>
  )
}

export default App
