import { useEffect, useState } from "react";
import { Link } from "react-router";

import request from "../../utils/request";
import ItemCard from "../item-card/ItemCard";
import Testimonials from "../testimonials/Testimonials";
import WhyUs from "../why-us/WhyUs";

export default function Home() {
    const [latestItems, setLatestItems] = useState([]);

    useEffect(() => {
        //*                Refactor  AbortController logic           ! ! !
        const abortController = new AbortController();

        request('/items?deleted_on=is.null&order=added_on.desc&limit=3', 'GET', null, { signal: abortController.signal })
            .then(setLatestItems)
            .catch(err => alert(err));

        return () => {
            abortController.abort("Home component unmounted");
        }
    }, []);

    return (

        <>

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
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="/images/couch.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-section">
                <div className="container">
                    <div className="row">

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
                        {latestItems.length > 0
                            ? latestItems.map(item => <ItemCard key={item.id} {...item} />)
                            : <h1>No Added Items Yet</h1>
                        }

                    </div>
                </div>
            </div>

            <WhyUs />

            <Testimonials />

        </>
    );
}