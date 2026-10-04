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

function App() {
    const [user, setUser] = useState(null);

    const userAuthHanler = (userData) => {
        setUser(userData);    
    };

    const logoutAction = () => {
        setUser(null);
    };

    return (
        <>

            <Header isAuthenticated={!!user} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/items/:itemId" element={<ItemDetails />} />
                <Route path="/items/:itemId/edit" element={<ItemEdit />} />
                <Route path="/items/add" element={<ItemAdd />} />
                <Route path="/register" element={<Register onRegister={userAuthHanler} />} />
                <Route path="/login" element={<Login onLogin={userAuthHanler} />} />
                <Route path="/logout" element={<Logout onLogout={logoutAction} />} />
            </Routes>

            <Footer /> 

        </>

    )
}

export default App
