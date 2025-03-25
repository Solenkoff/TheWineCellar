

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSquareFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



export default function About() {
    return (
        <div className="app-container">
            <section className='top'>
                <header className="header-container">
                    <div className='header-oval'>
                        <div className='header-left'>
                            <div className='logo-container'>
                                <a src="#">The Wine Cellar</a>
                            </div>
                        </div>
                        <div className='header-mid'>

                            <div className='header-mid-top'>
                                <div className='search-container'>
                                    <div className='icon-container'>
                                        <img src="/images/magnifier.png" alt="Magnifier" />
                                    </div>
                                    <input type="text" className='search block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6' placeholder='Search any wine' />
                                </div>

                            </div>

                            <div className='header-mid-bottom'>
                                <div className="dropdown dropdown-hover">
                                    <a tabIndex={0} role="button" className="btn m-1">
                                        <span className='icon-container'>
                                            <img src="/images/wine-glass-icon.png" alt="Wine Glass" />
                                        </span>
                                        <span className='nav-link'>Wines</span>
                                    </a>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <a tabIndex={0} role="button" className="btn m-1">
                                        <span className='icon-container'>
                                            <img src="/images/offer-icon-purple.png" alt="Offer Icon" />
                                        </span>
                                        <span className='nav-link'>Offers</span>
                                    </a>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <a tabIndex={0} role="button" className="btn m-1">
                                        <span className='icon-container'>
                                            <img src="/images/grapes.png" alt="Grapes" />
                                        </span>
                                        <span className='nav-link'>Grapes</span>
                                    </a>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <a tabIndex={0} role="button" className="btn m-1">
                                        <span className='icon-container'>
                                            <img src="/images/location.png" alt="Location" />
                                        </span>
                                        <span className='nav-link'>Regions</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className='header-right'>

                            <div className='user-container'>
                                <p className='username-display'>username</p>
                                <div className="dropdown dropdown-hover">
                                    <a src="#" className='icon-container'>
                                        <FontAwesomeIcon icon={faUser} className='user-icon' />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="about-container">
                        <div className="about-wrapper">

                            <div className="about-hero">
                                <div className="about-hero-background"></div>
                                <div className="about-hero-content">
                                    <p className='about'>ABOUT</p>
                                    <div className='logo-container'>
                                        <a src="#">The Wine Cellar</a>
                                    </div>
                                    <p className='sub-logo'>The Wine Cellar empowers people to enjoy wine to the fullest.</p>
                                    <p className='font-400'>Wine is about so much more than just a great label; it's about an experience and community and, of course, what's in the bottle. That's where The Wine Cellar comes in. As the world's largest online wine marketplace, the The Wine Cellar community is made up of millions of wine drinkers from around the world, coming together to make buying the right wine simple, straightforward, and fun, so that every community member feels confident about their wine choices. Created for everyone who likes wine - from the wine curious to the wine enthusiast. </p>
                                </div>
                                <div className="blanc"></div>
                            </div>

                            <div className="devider"></div>

                            <div className="leadership-container">
                                <h2>Leadership</h2>
                                <ul className="cards-container">
                                    <li className="leader-card">
                                        <div className="leader-img-container">
                                            <img src="/images/team/team-1.jpg" alt="" />
                                        </div>
                                        <div className="leader-content">
                                            <p className='leader-name'>Pesho Toshev</p>
                                            <p>Founder & Chairman of the Board</p>
                                        </div>
                                    </li>
                                    <li className="leader-card">
                                        <div className="leader-img-container">
                                            <img src="/images/team/team-2.jpg" alt="" />
                                        </div>
                                        <div className="leader-content">
                                            <p className='leader-name'>Tosho Peshov</p>
                                            <p>Chief Executive Officer</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="devider"></div>

                        </div>
                    </div>
                </main>

            </section>

            <footer className="footer">
                <div className='footer-inner'>
                    <div className='footer-top'>
                        <nav className='footer-navs'>
                            <a src="#" className="footer-nav">About</a>
                            <a src="#" className="footer-nav">Contact</a>
                            <a src="#" className="footer-nav">Merchants</a>
                        </nav>
                        <nav>
                            <a src="#"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                            <a src="#"><FontAwesomeIcon icon={faSquareFacebook} size='2x' /></a>
                            <a src="#"><FontAwesomeIcon icon={faXTwitter} size='2x' /></a>
                            <a src="#"><FontAwesomeIcon icon={faYoutube} size='2x' /></a>
                        </nav>
                    </div>
                    <div className='bottom'>
                        <p>Copyright © 2025 - All Rights Reserved</p>
                        <div className='footer-logo-container'>
                            <a src="#">The Wine Cellar</a>
                        </div>
                        <p>Designed And Developed By Solenkoff</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}