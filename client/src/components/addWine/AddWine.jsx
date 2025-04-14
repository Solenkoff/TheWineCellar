import { useState } from 'react';
import Select from 'react-select'; 

import './AddWine.css'
import '../test/Test.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSquareFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const categoryOptions = [
    { value: "all" , label: "All" },
    { value: "white" , label: "White" },
    { value: "red" , label: "Red" },
    { value: "sparkling" , label: "Sparkling" },
    { value: "rose" , label: "Rosé" },
    { value: "desert" , label: "Desert" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: "400px",
        borderRadius: "6px", 
        boxShadow: "none",
        textAlign: "left",
    }),
    option: (provided, state) => ({
        ...provided,
        width: "400px",
        color: state.isSelected ? "var(--clr-font-purple)" : "var(--clr-purple-mid)",
        backgroundColor: state.isSelected ? "var(--clr-bg-purple-very-light)" : "transparent",
        // backgroundColor: state.isHover ? "var(--clr-bg-purple-very-light)" : "lightgray"
    }),
};


export default function AddWine() {
    const [category, setCategory] = useState('All');


    const changeCategory = (e) => {
        setCategory(e.target.value);
    }


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

                            {/* <a href="#" className='login'>
                                <span className='icon-container'>
                                    <img src="/images/sign-in.png" alt="Location" />
                                </span>
                                <p>Sign in</p>
                            </a> */}
                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="add-container">
                        <div className="add-wrapper">
                            <section className="heading-container">
                                <h2 className="heading">
                                    Add Wine
                                </h2>
                            </section>

                            <section className='form'>
                                <form id="create" >
                                    <div className="container">
                                        <fieldset className="fieldset">
                                            <label htmlFor="headline" className="fieldset-legend">Headline</label>
                                            <input type="text" id="headline" name="headline" className="input" placeholder="Viña Alberdi Reserva 2019" />
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <label htmlFor="category" className="fieldset-legend">Category</label>
                                            <select id="category" value={category} onChange={changeCategory} className="select">
                                                <option className="option">All</option>
                                                <option className="option">White</option>
                                                <option>Red</option>
                                                <option>Sparkling</option>
                                                <option>Rosé</option>
                                                <option>Desert</option>
                                            </select>
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <Select options={categoryOptions} styles={customStyles}/>
                                            <label htmlFor="headline" className="fieldset-legend">Headline</label>
                                            <input type="text" id="headline" name="headline" className="input" placeholder="Viña Alberdi Reserva 2019" />
                                        </fieldset>


                                        <fieldset className="fieldset">
                                            <label htmlFor="headline" className="fieldset-legend">Headline</label>
                                            <input type="text" id="headline" name="headline" className="input" placeholder="Viña Alberdi Reserva 2019" />
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <label htmlFor="headline" className="fieldset-legend">Headline</label>
                                            <input type="text" id="headline" name="headline" className="input" placeholder="Viña Alberdi Reserva 2019" />
                                        </fieldset>

                                    </div>
                                </form>
                            </section>

                            <section className='btn-section'>
                                <input className="btn submit" type="submit" value="Add Wine" />
                            </section>



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