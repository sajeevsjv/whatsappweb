import { IoMdAdd } from "react-icons/io";
import { LuSticker } from "react-icons/lu";
import { MdMicNone } from "react-icons/md";
const ChatFooter = () => {
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
                   
                    <div className="mic  rounded-full p-1 hover:bg-[#666666] flex-1 flex justify-end pointer-events-auto cursor-pointer">
                        <MdMicNone />
                    </div>
                   
                </div>
                <input type="text" placeholder="Type a message" className="w-full pl-20 p-3  rounded-full bg-[#2a2a2a] text-white" />

            </div>
            </div>
        </>
    );
}
export default ChatFooter;
