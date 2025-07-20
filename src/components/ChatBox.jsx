import { useEffect, useState } from "react"


const ChatBox = ({setChatResponse}) => {
    const [input,setInput] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const callChatService = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:3000/api/chat",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message:input})
            })
            const data = await response.json();
            setIsLoading(false);
            setChatResponse(data.reply);
        }
        catch (error) {
            console.log("There was an error calling the API",error);
            setIsLoading(false);
            setChatResponse("There was an error calling the API.")
        }
    }

  return (
    <>
    <section className="relative w-screen justify-start items-center flex flex-col h-fit ">
        <textarea disabled={isLoading} value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Ask anything to our Cat Expert!" className="text-lg border w-1/2 h-40 rounded-xl p-4 resize-none" />
        <button disabled={isLoading} onClick={callChatService} className="absolute bottom-2 right-1/4 mr-3 z-30 text-xs border rounded-md px-2 hover:cursor-pointer disabled:opacity-50 disabled:hover:cursor-default">Generate!</button>
    </section>    
    {isLoading && <div className="border-2  border-r-transparent border-black size-5 rounded-full animate-spin mb-20"></div>}
    </>
  )
}

export default ChatBox