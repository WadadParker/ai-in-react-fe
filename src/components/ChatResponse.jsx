import { markdownToHtml } from "../Utils/Functions"

const ChatResponse = ({chat}) => {
  const thinkMatch = chat.match(/<think>([\s\S]*?)<\/think>/);
  const thinkBlock = thinkMatch ? thinkMatch[1] : '';

  const chatWithoutThink = chat.replace(/<think>[\s\S]*?<\/think>/g, '');

  const html = markdownToHtml(chatWithoutThink);
  return (
    <section className="flex flex-col grow w-screen justify-between items-center">
        <p className="w-1/2 text-xs text-gray-600">{thinkBlock}</p>
        <div className="w-1/2 text-xl grow overflow-y-scroll" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}

export default ChatResponse