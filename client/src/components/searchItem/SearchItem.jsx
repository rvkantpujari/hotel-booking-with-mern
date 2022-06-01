import "./searchItem.css";

export const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square600/257861366.webp?k=be794243a80951b34d487e1214b5737a87e83986dbd1326a3f5e9802cca54b51&o=&s=1"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air-conditioning
                </span>
                <span className="siFeatures">
                    Entire Studio * 1 bathroom * 21m<sup>2</sup> 1 full bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Inclusive Taxes and Fees</span>
                    <button className="siCheckButton">See Availability</button>
                </div>
            </div>
        </div>
    );
};
