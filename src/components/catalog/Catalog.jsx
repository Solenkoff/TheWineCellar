import { useEffect, useState } from "react";
import request from "../../utils/request";
import ItemCard from "../item-card/ItemCard";

export default function Catalog() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        request('/items?order=added_on.desc')
            .then(setItems)
            .catch(err => alert(err));
    }, []);

    return (

        <>
            {/* Start Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Catalog</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}

            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {items.length > 0
                            ? items.map(item => <ItemCard key={item.id} {...item} />)
                            : <h1>No Added Items Yet</h1>
                        }
                    </div>
                </div>
            </div>

        </>

    );
}