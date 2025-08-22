import FirstSection from "./mainlayout/FirstSection";
import ChatBody from "./message-section/ChatBody"
import {Provider} from "react-redux"
import Store from "./context/Store";
function App() {
  return (
    <>
    <Provider store={Store}>
    <div className="flex h-screen">
      <FirstSection />
      <ChatBody/>
      </div>
    </Provider>
    </>
  )
}
export default App;