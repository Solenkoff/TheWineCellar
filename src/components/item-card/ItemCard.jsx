import { Link } from "react-router";

export default function ItemCard({
    id,
    images,
    title,
    price
}) {
    return (

        <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link to={`/items/${id}`} className="product-item" >
                <div className="product-thumbnail">
                    <img
                        src={images[0]}
                        className="img-fluid "
                    />
                </div>
                <h3 className="product-title">{title}</h3>
                <strong className="product-price">${price}</strong>
                <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                </span>
            </Link>
        </div>

    );
}


