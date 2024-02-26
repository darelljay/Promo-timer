import { GlobalStyles } from "./Globalstyle"
// import MenuAppBar from "./components/header/headerComponent"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Main } from "./components/main/MainComponent"
import { AuthBackground } from "./components/authBackground/authbackground";
function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <GlobalStyles/>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/auth" element={<AuthBackground/>}/>
      </Routes>
    </BrowserRouter>
    </div>      
  )
}

export default App
