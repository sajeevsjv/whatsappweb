import FirstSection from "./mainlayout/FirstSection";
import ChatBody from "./message-section/ChatBody"
function App() {
  return (
    <>
    <div className="flex h-screen">
      <FirstSection />
      <ChatBody/>
      </div>
    </>
  )
}
export default App;