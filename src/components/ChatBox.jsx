import { useEffect, useState } from "react"


const ChatBox = () => {
    const [input,setInput] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const callChatService = async () => {
        try {
            const response = await fetch("http://localhost/api/chat",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message:input})
            })
            const data = await response.json();
        }
        catch (error) {
            console.log("There was an error calling the API",error);
        }
    }

  return (
    <>
    <textarea disabled={isLoading} value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Ask anything to our Cat Expert!" className="text-lg border w-1/2 h-1/4 rounded-xl p-4 resize-none" />
    {isLoading && <div className="border-2  border-r-transparent border-black size-5 rounded-full animate-spin"></div>}
    </>
  )
}

export default ChatBox