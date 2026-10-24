import { Link, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const { isAuthenticated } = useAuth();
    const { pathname } = useLocation();

    return (
        <header>
            <nav
                className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
                arial-label="Furni navigation bar"
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Furni<span>Shelter</span>
                    </Link>
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
                            <li className={pathname === "/" ? "active" : ""}>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className={pathname.startsWith("/catalog") ? "active" : ""}>
                                <Link className="nav-link" to="/catalog">Catalog</Link>
                            </li>
                            <li className={pathname.startsWith("/about") ? "active" : ""}>
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className={pathname.startsWith("/contact") ? "active" : ""}>
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                            {isAuthenticated &&
                                <li className={pathname.startsWith("/items/add") ? "active" : ""}>
                                    <Link className="nav-link" to="/items/add">AddListing</Link>
                                </li>
                            }
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li>
                                <a className="nav-link" href="#">
                                    <img src="/images/user.svg" />
                                </a>
                            </li>
                            {isAuthenticated
                                ? (
                                    <li>
                                        <Link className="nav-link" to="/logout">
                                            Logout
                                        </Link>
                                    </li>)
                                : (
                                    <li>
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}