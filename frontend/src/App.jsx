import {Route, Routes} from "react-router-dom";
import Home from './components/Home.jsx'
import About from "./components/About.jsx";
import Create from "./components/Create.jsx";
import Navbar from "./components/Navbar.jsx";
import HowToUse from "./components/HowToUse.jsx";
import Contact from "./components/Contact.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import FrequentlyAskedQuestions from "./components/FAQs.jsx";
import LoggedUser from "./components/LoggedUser.jsx";

function App() {
    const myWidth = 220
  return (
    <div className="App">
        <Navbar
            drawerWidth={myWidth}
            content = {
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/how-to-use" element={<HowToUse/>}/>
                    <Route path="/faq" element={<FrequentlyAskedQuestions/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/logged-user" element={<LoggedUser/>}/>
                 </Routes>

            }
        />
    </div>
  )
}

export default App
