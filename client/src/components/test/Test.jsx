import './Test.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSquareFacebook, faXTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const wines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


export default function Test() {
    return (
        <div className="app-container">
            <section className='top'>
                <header className="header-container">
                    <div className='header-oval'>
                        <div className='header-left'>
                            <div className='logo-container'>
                                <a href="#">The Wine Cellar</a>
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
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-1 ">
                                        <li><a>All</a></li>
                                        <li><a>White</a></li>
                                        <li><a>Red</a></li>
                                        <li><a>Sparkling</a></li>
                                        <li><a>Rosé</a></li>
                                        <li><a>Desert</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <a tabIndex={0} role="button" className="btn m-1">
                                        <span className='icon-container'>
                                            <img src="/images/offer-icon-purple.png" alt="Offer Icon" />
                                        </span>
                                        <span className='nav-link'>Offers</span>
                                    </a>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-1 ">
                                        <li><a>All</a></li>
                                        <li><a>&gt; 20%</a></li>
                                        <li><a>&gt; 30%</a></li>
                                        <li><a>&gt; 50%</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <a tabIndex={0} role="button" className="btn m-1">
                                        <span className='icon-container'>
                                            <img src="/images/grapes.png" alt="Grapes" />
                                        </span>
                                        <span className='nav-link'>Grapes</span>
                                    </a>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-1 ">
                                        <li><a>Cabernet Franc</a></li>
                                        <li><a>Cabernet Sauvignon</a></li>
                                        <li><a>Chardonnay</a></li>
                                        <li><a>Malbec</a></li>
                                        <li><a>Merlot</a></li>
                                        <li><a>Riesling</a></li>
                                        <li><a>Sauvignon Blanc</a></li>
                                        <li><a>Shiraz/Syrah</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <a tabIndex={0} role="button" className="btn m-1">
                                        <span className='icon-container'>
                                            <img src="/images/location.png" alt="Location" />
                                        </span>
                                        <span className='nav-link'>Regions</span>
                                    </a>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-1 ">
                                        <li><a>Bordeaux</a></li>
                                        <li><a>Bourgogne</a></li>
                                        <li><a>Napa Valley</a></li>
                                        <li><a>Toscana</a></li>
                                        <li><a>Rioja</a></li>
                                        <li><a>Barolo</a></li>
                                        <li><a>Marlborough Sauvignon Blanc</a></li>
                                        <li><a>California</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='header-right'>

                            <div className='user-container'>
                                <p className='username-display'>username</p>
                                <div className="dropdown dropdown-hover">
                                    <a href="#" className='icon-container'>
                                        <FontAwesomeIcon icon={faUser} className='user-icon' />
                                    </a>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-1 ">
                                        <li><a>Profile</a></li>
                                        <li><a>Orders</a></li>
                                        <li><a>Wishlist</a></li>
                                        <li className='devider'><a >Logout</a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="home-container">
                        <div className="headline-container">
                            <div className="headline-icon">
                                <img src="/images/wine-bottle-icon.png" alt="Wine bottle" className='headline-bottle' />
                                <img src="/images/badge-num-one.png" alt="Number one badge" className='headline-badge' />
                            </div>
                            <div className="headline-content">
                                <h3 className="headline">Bestsellers</h3>
                                <p>Get great value and seamless service with our most popular wines</p>
                            </div>
                        </div>

                        <div className='wine-list'>

                            {wines.map((wine) =>
                                <div key={wine.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                                        <span className="text-5xl">🍷</span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-1">{wine.name}</h3>
                                        <p className="text-gray-600 text-sm mb-2">{wine.region}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">{wine.price}</span>
                                            <span className="text-yellow-500">{wine.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </main>

            </section>

            <footer className="footer">
                <div className='footer-inner'>
                    <div className='footer-top'>
                        <nav className='footer-navs'>
                            <a href="#" className="footer-nav">About</a>
                            <a href="#" className="footer-nav">Contact</a>
                            <a href="#" className="footer-nav">Merchants</a>
                        </nav>
                        <nav>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                            <a href="#"><FontAwesomeIcon icon={faSquareFacebook} size='2x' /></a>
                            <a href="#"><FontAwesomeIcon icon={faXTwitter} size='2x' /></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube} size='2x' /></a>
                            {/* <a href="#"><FontAwesomeIcon icon={faTiktok} size='2x' /></a> */}
                        </nav>
                    </div>
                    <div className='bottom'>
                        <p>Copyright © 2025 - All Rights Reserved</p>
                        <div className='footer-logo-container'>
                            <a href="#">The Wine Cellar</a>
                        </div>
                        <p>Designed And Developed By Solenkoff</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}