import { useContext, useEffect, useState } from "react";
import ItemCard from "../item-card/ItemCard";
import { itemApi } from "../../api";
import AuthContext from "../../contexts/auth-context";

export default function Catalog() {
    const { accessToken } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        itemApi.getAll(accessToken)
            .then(setItems)
            .catch(err => alert(err));
    }, [accessToken]);

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