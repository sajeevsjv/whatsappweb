import { IoMdAdd } from "react-icons/io";
import { LuSticker } from "react-icons/lu";
import { MdMicNone } from "react-icons/md";
const ChatFooter = () => {
    return (
        <>  
        <div className="p-3  bg-[#161717]">
            <div className="chat-footer relative  w-full ">
                <div className="absolute flex items-center top-1/2 -translate-y-1/2 px-4 text-white text-xl w-full">
                 <div className="add flex-1">
                        <IoMdAdd />
                    </div>
                 <div className="sticker flex-1">
                        <LuSticker />
                    </div>
                   
                    <div className="mic flex-25 flex justify-end">
                        <MdMicNone />
                    </div>
                   
                </div>
                <input type="text" placeholder="Type a message" className="w-full pl-20 p-2  rounded-full bg-[#2a2a2a] text-white" />

            </div>
            </div>
        </>
    );
}
export default ChatFooter;
