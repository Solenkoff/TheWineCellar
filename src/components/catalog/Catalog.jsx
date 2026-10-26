import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ItemCard from "../item-card/ItemCard";
import { itemApi } from "../../api";


export default function Catalog() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const loadItems = async () => {
            try {
                const result = await itemApi.getAll();

                if (!cancelled) {
                    setItems(result);
                }
            } catch (error) {
                if (!cancelled) {
                    setLoadError(true);
                    toast.error(error.message || "Failed to load listings.");
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        };

        loadItems();

        return () => {
            cancelled = true;
        };
    }, []);

    
    return (
        <>

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

            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {isLoading ? (
                            <p>Loading listings...</p>
                        ) : loadError ? (
                            <p>Listings could not be loaded. Please refresh the page.</p>
                        ) : items.length > 0 ? (
                            items.map(item => (
                                <ItemCard key={item.id} {...item} />
                            ))
                        ) : (
                            <h2>No Added Items Yet</h2>
                        )}
                    </div>
                </div>
            </div>

        </>
    );

}