import { Route, Routes, useNavigate } from "react-router"
import { useState } from "react"

import Catalog from "./components/catalog/Catalog"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import ItemDetails from "./components/item-details/ItemDetails"
import ItemAdd from "./components/item-add/ItemAdd"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Logout from "./components/logout/Logout"
import ItemEdit from "./components/item-edit/ItemEdit"
import ScrollToTop from "./components/ui/scroll-to-top/ScrollToTop"
import BackToTop from "./components/ui/back-to-top/BackToTop"
import { register } from "./api/auth-api"


function App() {
    const [auth, setAuth] = useState(null);

    const userAuthHandler = async (userData) => {
        try {
            const result = await register(userData);
            
            setAuth(result);
            
        } catch (error) {
            alert(error.message);
        }    
    };

    const logoutAction = () => {
        setUser(null);
    };

    return (
        <>

            <Header isAuthenticated={!!user} />

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/items/:itemId" element={<ItemDetails user={user} />} />
                <Route path="/items/:itemId/edit" element={<ItemEdit />} />
                <Route path="/items/add" element={<ItemAdd />} />
                <Route path="/register" element={<Register onRegister={userAuthHandler} />} />
                <Route path="/login" element={<Login onLogin={userAuthHandler} />} />
                <Route path="/logout" element={<Logout onLogout={logoutAction} />} />
            </Routes>

            <BackToTop />

            <Footer /> 

        </>

    )
}

export default App
