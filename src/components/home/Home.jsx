import { useEffect, useState } from "react";
import { Link } from "react-router";

import request from "../../utils/request";
import ItemCard from "../item-card/ItemCard";

export default function Home() {
    const [latestItems, setLatestItems] = useState([]);

    useEffect(() => {
        //*                Refactor  AbortController logic           ! ! !
        const abortController = new AbortController();

        request('/items?deleted_on=is.null&order=added_on.desc&limit=3', 'GET', null, { signal: abortController.signal })
            .then(setLatestItems)
            .catch(err => alert(err));

        return () => {
            abortController.abort();
        }
    }, []);


    return (

        <>

            {/* Start Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>
                                    Give Furniture a<br />Second Life
                                </h1>
                                <p className="mb-4" >
                                    Beautiful pre-loved pieces looking for a home, not a dumpster. Every single item in our catalog is waiting for someone like you to step in, rescue it from the landfill, and bring it home without spending a fortune.
                                </p>
                                <p>
                                    <Link to="/catalog" className="btn btn-secondary me-2">
                                        Rescue Now
                                    </Link>
                                    {/* <a href="#" className="btn btn-white-outline">
                                        Explore
                                    </a> */}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="/public/images/couch.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}

            {/* Start Product Section */}
            <div className="product-section">
                <div className="container">
                    <div className="row">


                        {/* Start Column 1 */}
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">
                                Freshly Listed, Ready to Rescue
                            </h2>
                            <p className="mb-4">
                                Discover the latest furniture looking for a second home. Find something you love and give it a new beginning.
                            </p>
                            <p>
                                <Link to="/catalog" className="btn">
                                    View All Items
                                </Link>
                            </p>
                        </div>
                        {/* End Column 1 */}
                        {latestItems.length > 0
                            ? latestItems.map(item => <ItemCard key={item.id} {...item} />)
                            : <h1>No Added Items Yet</h1>
                        }


                    </div>
                </div>
            </div>
            {/* End Product Section */}

            {/* Start Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h2 className="section-title">Why Choose Us</h2>
                            <p>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src="/public/images/truck.svg"
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3>Fast &amp; Free Shipping</h3>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                                            aliquet velit. Aliquam vulputate.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src="/public/images/bag.svg"
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3>Easy to Shop</h3>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                                            aliquet velit. Aliquam vulputate.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src="/public/images/support.svg"
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3>24/7 Support</h3>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                                            aliquet velit. Aliquam vulputate.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src="/public/images/return.svg"
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3>Hassle Free Returns</h3>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                                            aliquet velit. Aliquam vulputate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img
                                    src="/public/images/why-choose-us-img.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}

            {/* Start Testimonial Slider */}
            <div className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">Testimonials</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="testimonial-slider-wrap text-center">
                                <div id="testimonial-nav">
                                    <span className="prev" data-controls="prev">
                                        <span className="fa fa-chevron-left" />
                                    </span>
                                    <span className="next" data-controls="next">
                                        <span className="fa fa-chevron-right" />
                                    </span>
                                </div>
                                <div className="testimonial-slider">
                                    <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">
                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>
                                                            “Donec facilisis quam ut purus rutrum lobortis. Donec
                                                            vitae odio quis nisl dapibus malesuada. Nullam ac
                                                            aliquet velit. Aliquam vulputate velit imperdiet dolor
                                                            tempor tristique. Pellentesque habitant morbi
                                                            tristique senectus et netus et malesuada fames ac
                                                            turpis egestas. Integer convallis volutpat dui quis
                                                            scelerisque.”
                                                        </p>
                                                    </blockquote>
                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img
                                                                src="/public/images/person-1.png"
                                                                alt="Maria Jones"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">
                                                            CEO, Co-Founder, XYZ Inc.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END item */}
                                    <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">
                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>
                                                            “Donec facilisis quam ut purus rutrum lobortis. Donec
                                                            vitae odio quis nisl dapibus malesuada. Nullam ac
                                                            aliquet velit. Aliquam vulputate velit imperdiet dolor
                                                            tempor tristique. Pellentesque habitant morbi
                                                            tristique senectus et netus et malesuada fames ac
                                                            turpis egestas. Integer convallis volutpat dui quis
                                                            scelerisque.”
                                                        </p>
                                                    </blockquote>
                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img
                                                                src="/public/images/person-1.png"
                                                                alt="Maria Jones"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">
                                                            CEO, Co-Founder, XYZ Inc.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END item */}
                                    <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">
                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>
                                                            “Donec facilisis quam ut purus rutrum lobortis. Donec
                                                            vitae odio quis nisl dapibus malesuada. Nullam ac
                                                            aliquet velit. Aliquam vulputate velit imperdiet dolor
                                                            tempor tristique. Pellentesque habitant morbi
                                                            tristique senectus et netus et malesuada fames ac
                                                            turpis egestas. Integer convallis volutpat dui quis
                                                            scelerisque.”
                                                        </p>
                                                    </blockquote>
                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img
                                                                src="/public/images/person-1.png"
                                                                alt="Maria Jones"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">
                                                            CEO, Co-Founder, XYZ Inc.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Testimonial Slider */}

            {/* Start Blog Section */}
            <div className="blog-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <h2 className="section-title">Recent Blog</h2>
                        </div>
                        <div className="col-md-6 text-start text-md-end">
                            <a href="#" className="more">
                                View All Posts
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <a href="#" className="post-thumbnail">
                                    <img
                                        src="/public/images/post-1.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </a>
                                <div className="post-content-entry">
                                    <h3>
                                        <a href="#">First Time Home Owner Ideas</a>
                                    </h3>
                                    <div className="meta">
                                        <span>
                                            by <a href="#">Kristin Watson</a>
                                        </span>{" "}
                                        <span>
                                            on <a href="#">Dec 19, 2021</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <a href="#" className="post-thumbnail">
                                    <img
                                        src="/public/images/post-2.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </a>
                                <div className="post-content-entry">
                                    <h3>
                                        <a href="#">How To Keep Your Furniture Clean</a>
                                    </h3>
                                    <div className="meta">
                                        <span>
                                            by <a href="#">Robert Fox</a>
                                        </span>{" "}
                                        <span>
                                            on <a href="#">Dec 15, 2021</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <a href="#" className="post-thumbnail">
                                    <img
                                        src="/public/images/post-3.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </a>
                                <div className="post-content-entry">
                                    <h3>
                                        <a href="#">Small Space Furniture Apartment Ideas</a>
                                    </h3>
                                    <div className="meta">
                                        <span>
                                            by <a href="#">Kristin Watson</a>
                                        </span>{" "}
                                        <span>
                                            on <a href="#">Dec 12, 2021</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Section */}

        </>
    );
}