import Testimonials from "../testimonials/Testimonials";
import WhyUs from "../why-us/WhyUs";
import styles from "./About.module.css"


export default function About() {
    return (<>
        {/* Start Hero Section */}
        <div className={`hero ${styles.hero}`}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>Who We Are</h1>
                            <p className="mb-4">
                                At FurniShelter, we believe every piece of furniture has a story worth continuing.
                            </p>
                            <p>
                                We're a community-driven platform connecting people who have furniture to pass on with those looking for unique, affordable pieces to bring into their homes. Whether you're making room for something new or searching for a hidden gem, we make it easier to give pre-loved furniture a fresh start.
                            </p>
                            <p>
                                Our mission is simple: reduce waste, encourage reuse, and make sustainable living accessible to everyone. Because sometimes, the perfect piece isn't brand new — it's just waiting for its next chapter.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src="images/couch.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Hero Section */}


        <WhyUs />

        {/* Start Team Section */}
        <div className="untree_co-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-5 mx-auto text-center">
                        <h2 className="section-title">Our Team</h2>
                    </div>
                </div>
                <div className="row">
                    {/* Start Column 1 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                        <img src="images/person_1.jpg" className="img-fluid mb-5" />
                        <h3 clas="">
                            <a href="#">
                                <span className="">Lawson</span> Arnold
                            </a>
                        </h3>
                        <span className="d-block position mb-4">Founder & Sustainability Advocate</span>
                        <p>
                            Passionate about reducing furniture waste, Lawson started Second Life Furniture to help beautiful pieces find new homes and inspire more sustainable living.
                        </p>
                    </div>
                    {/* End Column 1 */}
                    {/* Start Column 2 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                        <img src="images/person_2.jpg" className="img-fluid mb-5" />
                        <h3 clas="">
                            <a href="#">
                                <span className="">Jeremy</span> Walker
                            </a>
                        </h3>
                        <span className="d-block position mb-4">Community & Customer Support</span>
                        <p>
                            Jeremy helps connect furniture owners with their next rescuers, making every interaction friendly, simple, and enjoyable.
                        </p>
                    </div>
                    {/* End Column 2 */}
                    {/* Start Column 3 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                        <img src="images/person_3.jpg" className="img-fluid mb-5" />
                        <h3 clas="">
                            <a href="#">
                                <span className="">Patrik</span> White
                            </a>
                        </h3>
                        <span className="d-block position mb-4">Furniture Restoration Specialist</span>
                        <p>
                            With an eye for hidden potential, Patrik believes even the most forgotten furniture can shine again with a little care and creativity.
                        </p>
                    </div>
                    {/* End Column 3 */}
                    {/* Start Column 4 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                        <img src="images/person_4.jpg" className="img-fluid mb-5" />
                        <h3 clas="">
                            <a href="#">
                                <span className="">Kathryn</span> Ryan
                            </a>
                        </h3>
                        <span className="d-block position mb-4">Partnerships & Logistics Coordinator</span>
                        <p>
                            Kathryn works with our transport and moving partners to help make every furniture rescue easier, safer, and more affordable.
                        </p>
                    </div>
                    {/* End Column 4 */}
                </div>
            </div>
        </div>
        {/* End Team Section */}

        <Testimonials />

    </>

    );
}