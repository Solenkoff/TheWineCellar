
import './About.css'
import '../test/Test.css'

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
                                    <a src="#" className='icon-container'>
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

                            {/* <a src="#" className='login'>
                                <span className='icon-container'>
                                    <img src="/images/sign-in.png" alt="Location" />
                                </span>
                                <p>Sign in</p>
                            </a> */}
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

                            <div className="team-container">
                                <p className="the-team">THE</p>
                                <h2 className="company">The Wine Cellar</h2>
                                <p className="the-team">TEAM</p>
                                <p className="team">Meet the brains behind the operation</p>
                                <p className="team">Akosua Oben-Nyarko · Alaina Dudhia · Alexander Holm · Alasdair Hawkins · Alexander Jensen · Alexander Sheward · Alexis Kozak · Alice Powell · Alina Waag · Anders Klenke · Andreas Aagaard · Andreea Sandu · Anna Thompson · Astrid Gudmand · Boris Guillome · Carmen Enciso · Christelle Borel · Christian Orthmann · Christina Krogh Nielsen · Daniel Kouthoofd · Dani Lofiego-Verdugo · Dara Creavin · Dennis Otimong · Diane Dufour · Dominik Demcak · Drew Schimmel · Edoardo Domenico Primo · Eduardo Rodrigues · Eduardo Sorribas Canela · Emilie Voss · Emmet Farrell · Eri Watanabe · Eric Miller · Fede Strand · Florencia Torres · Francisco José García Montenegro · Genny Locaputo · Gonzalo de Leyva · Gregor Kirschbaum · Gwenyth Marie Siu · Heini Zachariassen · Helgi Finsson · Henning Kuberczyk · James Fildes · James Hurst ·Jarle List · Jef Schrijvers · Jens Oechsler · Jill Bartnick · Joachim Svensson · John Bevan · John Wooton · Jonas Hinge · Jonas Jakobsen · Jonathan Krog · Josh Malarkey · Julie Porst · Karthik Krosuri · Kasper Weibel Nielsen-Refs · Katy Petersen · Kellie Belcher · Kenneth Kirchhoff · Kir Doronin · Konrad Bajtyngier · Krishna Kurri · Kristi Marie Paris · Kristine Bergfelde · Kyle Tunis · Lachlan Denyer · Laure du Temple · Laurence Coombe · Liz Dyer · Lorena Cazan · Lucas Beck · Lucas Fulchiron · Lukas Kimmer · Lukas Rist · Mahendra Raj · Mao Morisawa · Mariana Lamesta · Mariia Dehtiarova · Matt Barham · Matthew Breedon · Melanie Miller · Michael Skuratovich · Miguel Zurbano Sanchez · Mimi Holmes · Mina Miyazaki · Monika Mateska · Morten Fillipsen · Morten Slott Hansen · Morten Heuing · Mubarak Hussain · Nathalie Croquelois · Nik Suprunov · Nikolaj Jønsson · Nikolai Ianchuk · Nitheesh Krishnanandan · Oleg Parinov · Oleksandr Vilchynskyy · Oliver Hye-Knudsen · Omer Tanveer · Patrick Petersen · Paul Gerken · Paul Jones · Paula Cons · Pauline Boering · Petra Gent · Praveen Rai · Raul-Mircea Crivineanu · Rebecca Friis · Rebecca Picard · Rasmus Hilleke · Rebecca Simmons · Rosalie ter Braak · Samuel Serra · Sarah Korn · Shelby De Mello · Silje Stougaard · Silvia Pedrazzi · Simon Benfeldt Jørgensen · Soo Hong · Stefan Penk · Stefan Petersen · Stefanos Kyriakou · Talita Andrzejewska · Tanja Olsen · Thomas Pilgaard Carlsen · Tue Sø · Verena Hinrichs · Vlad Dzeikun · Uljana Dufour · Vinicius Ribeiro · Wesley Cheng · William Parsons · Yaryna Lebedovych · Yauheni Baradaukin · Zainab Diab · Zbyněk Vymazal · Zuzanna Gesla</p>
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