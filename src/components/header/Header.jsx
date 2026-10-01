import { Link } from "react-router";

export default function Header() {
    return (

        <header>
            <nav
                className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
                arial-label="Furni navigation bar"
            >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Furni<span>Shelter</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsFurni"
                        aria-controls="navbarsFurni"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/catalog">Shop</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="about.html">About us</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="services.html">Services</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="blog.html">Blog</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="contact.html">Contact us</Link>
                            </li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li>
                                <a className="nav-link" href="#">
                                    <img src="/public/images/user.svg" />
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}