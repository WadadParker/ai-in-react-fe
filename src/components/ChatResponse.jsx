import { markdownToHtml } from "../Utils/Functions"

const ChatResponse = ({chat}) => {
    const html = markdownToHtml(chat);
  return (
    <div className="w-1/2 text-xl" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default ChatResponse