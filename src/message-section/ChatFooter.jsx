import { IoMdAdd } from "react-icons/io";
import { LuSticker } from "react-icons/lu";
import { MdMicNone } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const ChatFooter = () => {
    console.log("ChatFooter rendered"); 
     const dispatch = useDispatch();
     const { messages } = useSelector((state) => state.message);
     const [newMessage, setNewMessage] = useState("");

    const [typingMessage, setTypingMessage] = useState(false);

     useEffect(()=>{
                // Logic to handle message changes
                console.log("Message changed:", messages);
         }, [messages]);

     const handleChange = (e)=>{
         setTypingMessage((e.target.value.length > 0) ? true : false);

            setNewMessage(e.target.value);
     }

     const handleSend = () => {
         
        dispatch({
            type : 'message/addMessage',
            payload: newMessage

        });

        setNewMessage("");
    }

    return (
        <>  
        <div className="p-3  bg-transparent">
            <div className="chat-footer relative  w-full ">
                <div className="absolute gap-1 flex items-center pointer-events-none top-1/2 -translate-y-1/2 px-4 text-white text-xl w-full">
                 <div className="add  rounded-full p-1 hover:bg-[#666666] flex-1 pointer-events-auto cursor-pointer">
                        <IoMdAdd />
                    </div>
                 <div className="sticker  rounded-full p-1 hover:bg-[#666666] flex-1 pointer-events-auto cursor-pointer">
                        <LuSticker />
                    </div>
                    <div className="flex-50 bg-amber-500">
                      
                    </div>
                    { !typingMessage ? (
                    <div className="mic  rounded-full p-1 hover:bg-[#666666] flex-1 flex justify-end pointer-events-auto cursor-pointer">
                        <MdMicNone />
                    </div>)
                    :
                    (
                        <div onClick={handleSend} className="mic  rounded-full p-1 hover:bg-green-600 flex-1 flex justify-end pointer-events-auto cursor-pointer">
                            <IoMdSend />
                        </div>
                    )}
                   
                </div>
                <input type="text" onKeyDown={(e) => e.key === "Enter" && handleSend()} onChange={handleChange} placeholder="Type a message" className="w-full pl-20 p-3  rounded-full bg-[#2a2a2a] text-white" />

            </div>
            </div>
        </>
    );
}
export default ChatFooter;
