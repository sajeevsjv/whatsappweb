import { PiChatText } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
const HeaderSection = ()=>{
    return(
        <>
        <div className="header-container w-full flex flex-col gap-3 p-3 bg-[#161717] text-white">
            <div className="line-one w-full flex items-center text-2xl ">
                <div className="flex-30 font-semibold"><h1>Whatsapp</h1></div>
                <div className="flex-2"><PiChatText  /></div>
                <div className="flex-2"><BsThreeDotsVertical /></div>
            </div>
            <div className="line-two w-full flex justify-center  relative text-md">
                <input className="w-full  pl-10 p-2 border border-gray-300 hover:border-gray-800 rounded-full outline-none" type="search" placeholder="search or start a new chat"/>
                <div className="absolute left-5 top-[50%] transform -translate-y-1/2"><IoIosSearch /></div>
            </div>
            <div className="line-three flex gap-2">
                <div className="w-fit p-1 px-2 border border-gray-500  rounded-full ">
                    all chats
                </div>
                <div className="w-fit p-1 px-2 border border-gray-500  rounded-full ">
                    all chats
                </div>
                <div className="w-fit p-1 px-2 border border-gray-500  rounded-full ">
                    all chats
                </div>
                
            </div>
        </div>
        </>
    )
}
export default HeaderSection;