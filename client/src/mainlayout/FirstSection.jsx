import ChatList from "./ChatsList";
import HeaderSection from "./HeaderSection";
const FirstSection = () => {
    return (
        <>
            <div className="first-section-container min-h-[100vh] bg-[#161717]  w-1/2">
                <HeaderSection />
                <ChatList />
            </div>
        </>
    );
}

export default FirstSection;

