import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
const MessageSection = ()=>{
    return(
        <>
        <div className="message-section h-full w-full  relative bg-amber-600">
            <ChatHeader />  
            <ChatBody />
             <div className="absolute w-full bottom-0">
                     <ChatFooter />
             </div>
       
        </div>
        </>
    )
}
export default MessageSection;
