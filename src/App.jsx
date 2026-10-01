import { Route, Routes } from "react-router"
import Catalog from "./components/catalog/Catalog"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import ItemDetails from "./components/item-details/ItemDetails"

function App() {

    return (
        <>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/item/:itemId" element={<ItemDetails />} />
            </Routes>

            <Footer />

        </>

    )
}

export default App
