
export default function WineCard({
    w,
}) {
    return (

        <div className="card">
            <div className='card-top'>
                <div className="img-container">
                    <img src="/images/Felix-Solis-Mucho-Mas-Tinto.png" alt="" />
                    <div className="discount-container">
                        <span className='discount-save'>save
                            <span className='discount-percent'>25%</span>
                        </span>
                    </div>
                </div>
                <div className="top-right">
                    <p className='rating-num'>4.7</p>
                    <p className='stars'>★★★★★</p>
                    <p>274 ratings</p>
                    <div className='price-container'>
                        <p className='price'>$12.99</p>
                    </div>
                    <p className='original-price'>$25</p>
                </div>
            </div>
            <div className="card-bottom">
                <p className="producer">Félix Solís</p>
                <p className="grapes-year">Mucho Más Tinto N.V.</p>
                <div className="country-contaier">
                    <div className="flag-container">
                        <img src="images/spain-flag.png" alt="" className='flag-image' />
                    </div>
                    <p className="region-country">Vino de España, Spain</p>
                </div>
            </div>
        </div>

    );
}