import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
const ChatHeader = ()=>{
    return(
        <>
        <div className="w-full flex items-center   p-3 bg-[#161717] text-white">
           <div className="contact-info flex-30 flex gap-2 items-center">
            <div className="dp h-10 w-10 rounded-full bg-gray-500"></div>
            <div className="name">
                <h2 className="text-lg">sajeev</h2>
                <p className="text-xs">online</p>
            </div>
           </div>
           <div className="search flex-2 text-lg font-semibold"><IoIosSearch /></div>
           <div className="menu flex-2 text-lg font-semibold"><BsThreeDotsVertical /></div>
        </div>
        </>
    )
}
export default ChatHeader;