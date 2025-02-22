import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './components/LoggedOutUserPages/Home.jsx';
import About from "./components/LoggedOutUserPages/About.jsx";
import Navbar from "./components/Navbars/Navbar.jsx";
import LoggedNavbar from "./components/Navbars/LoggedUserNavbar.jsx";
import HowToUse from "./components/LoggedOutUserPages/HowToUse.jsx";
import Contact from "./components/LoggedOutUserPages/Contact.jsx";
import SignIn from "./components/LoggedOutUserPages/SignIn.jsx";
import SignUp from "./components/LoggedOutUserPages/SignUp.jsx";
import FrequentlyAskedQuestions from "./components/LoggedOutUserPages/FAQs.jsx";
import WelcomeLoggedUser from "./components/LoggedInUserPages/WelcomeLoggedUser.jsx";
import ProtectedRoute from "./components/Configuration/ProtectedRoute.jsx";
import EmployeeManager from "./components/LoggedInUserPages/EmployeeManager.jsx";
import WorkplaceManager from "./components/LoggedInUserPages/WorkplaceManager.jsx";
import ScheduleManager from "./components/LoggedInUserPages/ScheduleManager.jsx";
import ActiveScheduleManager from "./components/LoggedInUserPages/ActiveSheduleManager.jsx";
import Settings from "./components/LoggedInUserPages/Settings.jsx";
import Support from "./components/LoggedInUserPages/Support.jsx";

function App() {
    const myWidth = 220;
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("access_token"));
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        console.log("Token:", token);
        setIsAuthenticated(!!token);
    }, []);

    return (
        <div className="App">
            {isAuthenticated ? (
                <LoggedNavbar
                    drawerWidth={myWidth}
                    setIsAuthenticated={setIsAuthenticated}
                    content = {
                        <Routes>
                            {/* Protected Route for Logged Users */}
                            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                                <Route path="/logged-user" element={<WelcomeLoggedUser />} />
                                <Route path="/employee-manager" element={<EmployeeManager />} />
                                <Route path="/workplace-manager" element={<WorkplaceManager />} />
                                <Route path="/schedule-manager" element={<ScheduleManager />} />
                                <Route path="/active-schedule-manager" element={<ActiveScheduleManager />} />
                                <Route path="/support" element={<Support />} />
                                <Route path="/settings" element={<Settings />} />
                            </Route>
                        </Routes>
                    }
                />
            ) : (
                <Navbar
                    drawerWidth={myWidth}
                    content = {
                        <Routes>
                            {/* Public Routes */}
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/how-to-use" element={<HowToUse />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/faq" element={<FrequentlyAskedQuestions />} />
                            <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    }
                />
            )}
        </div>
    );
}

export default App;