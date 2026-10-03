import { Route, Routes } from "react-router"
import Catalog from "./components/catalog/Catalog"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import ItemDetails from "./components/item-details/ItemDetails"
import ItemAdd from "./components/item-add/ItemAdd"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

function App() {

    return (
        <>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/items/:itemId" element={<ItemDetails />} />
                <Route path="/items/add" element={<ItemAdd />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>

            <Footer />

        </>

    )
}

export default App
