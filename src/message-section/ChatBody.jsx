const ChatBody = ()=>{
    return (
        <div className="container bg-[#161717]   w-full  h-[80vh]  p-4 flex flex-col  text-white">
            <div className="date-chip rounded-full text-xs text-gray-100 border border-gray-500 m-auto w-fit px-2 py-1">Today</div>

            <div className="my-msg bg-[#144D37] p-2 w-fit flex rounded-lg text-white">
                 <div>hello sajeeeeeeeev </div>
                <div className="msg-details w-full flex items-end  gap-2 text-[11px] justify-end text-gray-400">
                <span>855 AM</span>
                <span>///</span>
                </div>
            </div>
            
        </div>
    );
}
export default ChatBody;