import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { useSelector } from "react-redux";


const ChatBody = () => {
  const { messages } = useSelector((state) => state.message);
    
  return (
    <div className="h-screen flex w-full flex-col bg-[#161717] border-l-2 border-gray-900 text-white">
        <div className="border-b border-gray-800">
        <ChatHeader />
        </div>
      {/* Scrollable chat body */}
      <div className=" overflow-y-scroll scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-[#1e1e1e]  p-10 flex flex-col gap-4">
        <div className="date-chip rounded-full text-xs text-gray-100 border border-gray-500 mx-auto w-fit px-2 py-1">
          Today
        </div>

       {
          messages.map((msg, index) => (
            <div
              key={index}
              className="my-msg bg-[#144D37] p-2 w-fit flex flex-col rounded-lg text-white"
            >
              <div>{msg.msg}</div>
              <div className="msg-details w-full flex items-end gap-2 text-[11px] justify-end text-gray-400">
                <span>{msg.timestamp()}</span>
                <span>{msg.sender}</span>
              </div>
            </div>
          ))}
      </div>

      {/* Fixed footer */}
      <div className="border-t  border-gray-800">
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatBody;
