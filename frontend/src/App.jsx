import {Route, Routes} from "react-router-dom";
import Home from './components/Home.jsx'
import About from "./components/About.jsx";
import Create from "./components/Create.jsx";
import Navbar from "./components/Navbar.jsx";

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
                 </Routes>

            }
        />
    </div>
  )
}

export default App
