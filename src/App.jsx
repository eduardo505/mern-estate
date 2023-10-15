import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import SingUp from "./pages/SingUp"
import SingIn from "./pages/SingIn"
import About from "./pages/About"
import Profile from "./pages/Profile"


function App() {


  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/sing-up" element={<SingUp></SingUp>}></Route>
         <Route path="/sing-in" element={<SingIn></SingIn>}></Route>
         <Route path="/about" element={<About></About>}></Route>
         <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
