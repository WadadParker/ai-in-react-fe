import { useState } from "react"
import ChatBox from "./components/ChatBox"
import ChatResponse from "./components/ChatResponse";

function App() {
  const [chatResponse,setChatResponse] = useState("");

  return (
    <div className="flex flex-col-reverse justify-start items-center gap-y-10 h-screen pb-2">
      <ChatBox setChatResponse={setChatResponse}/>
      <ChatResponse chat={chatResponse} />
      <h1 className="sticky top-0 text-9xl text-center">CatChat</h1>
    </div>
  )
}

export default App
