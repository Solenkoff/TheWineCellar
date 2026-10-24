import { Link } from "react-router";

export default function Footer() {
    return (

        <footer className="footer-section">
            <div className="container relative">
                <div className="sofa-img">
                    <img src="/images/sofa.png" alt="Image" className="img-fluid" />
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img
                                        src="/images/envelope-outline.svg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>
                            <form action="/contact" className="row g-3">
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary">
                                        <span className="fa fa-paper-plane" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap">
                            <a href="#" className="footer-logo">
                                Furni<span>Shelter</span>
                            </a>
                        </div>
                        <p className="mb-4">
                            Great things happen when we stay connected. Follow us on your favorite platforms to share your feedback, ask questions, and get inspired.
                        </p>
                        <ul className="list-unstyled custom-social">
                            <li>
                                <a href="#">
                                    <span className="fa fa-brands fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="fa fa-brands fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="fa fa-brands fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="fa fa-brands fa-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog">Catalog</Link>
                                    </li>
                                    <li>
                                        <Link to="/about#why-choose-us">Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/about#team">Our team</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/contact">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Support</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="https://www.taysidereusers.co.uk/the-environmental-impact-of-reusing-furniture-numbers-that-will-surprise-you/">Sustainability</Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.thespruce.com/what-is-feng-shui-1275060">Feng shui</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-center text-lg-start">
                                Copyright ©. All Rights Reserved. — Designed with love by{" "}
                                <a href="https://untree.co" className="space-left">Untree.co</a>
                                <span className="space-left space-right" >&</span>
                                <a href="https://github.com/Solenkoff">Solenkoff</a>
                            </p>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4">
                                    <a href="#">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}
