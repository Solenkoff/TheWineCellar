import { Route, Routes } from "react-router";

import { AuthProvider } from "./contexts/auth-context";

import AuthGuard from "./components/route-guards/AuthGuard";
import GuestGuard from "./components/route-guards/GuestGuard";

import ToastNotification from "./components/toast-notification/ToastNotification";
import Header from "./components/header/Header";
import ScrollToTop from "./components/ui/scroll-to-top/ScrollToTop";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import ItemDetails from "./components/item-details/ItemDetails";
import ItemEdit from "./components/item-edit/ItemEdit";
import ItemAdd from "./components/item-add/ItemAdd";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import BackToTop from "./components/ui/back-to-top/BackToTop";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <AuthProvider>

            <Header />

            <ScrollToTop />

            <Routes>
                {/*  Public   */}
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/items/:itemId" element={<ItemDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                {/* Authenticated only */}
                <Route element={<AuthGuard />}>
                    <Route path="/items/add" element={<ItemAdd />} />
                    <Route path="/items/:itemId/edit" element={<ItemEdit />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>

                {/* Guessts only */}
                <Route element={<GuestGuard />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>

            <BackToTop />

            <ToastNotification />

            <Footer />

        </AuthProvider>
    );
}

export default App;