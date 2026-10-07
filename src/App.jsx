import { Route, Routes, useNavigate } from "react-router"
import { useState } from "react"

import { authApi } from "./api"

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


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);

    const registerAction = async (userData) => {
        try {
            const result = await authApi.register(userData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            alert(error.message);
        }   
    };

    const loginAction = async (userData) => {
        try {
            const result = await authApi.login(userData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const logoutAction = () => {
        setAuth(null);
    };

    return (
        <>

            <Header isAuthenticated={!!auth?.user} />

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/items/:itemId" element={<ItemDetails user={auth?.user} />} />
                <Route path="/items/:itemId/edit" element={<ItemEdit />} />
                <Route path="/items/add" element={<ItemAdd />} />
                <Route path="/register" element={<Register onRegister={registerAction} />} />
                <Route path="/login" element={<Login onLogin={loginAction} />} />
                <Route path="/logout" element={<Logout onLogout={logoutAction} />} />
            </Routes>

            <BackToTop />

            <Footer />

        </>

    )
}

export default App
