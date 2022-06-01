import "./hotel.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/170443839.jpg?k=5a066e53a1c89f5129e213d8d48d7e2c2e102be4dd9a52b1d20b00466cb646e6&o=&hp=1",
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/170443603.jpg?k=5d27d0cadfe48e88be3df75c6df9564d980761f22ccf3f18b0427d62d2af75c8&o=&hp=1",
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/170443081.jpg?k=343cbed2cc43c2cc0b2311cc4c1764c4506e673e7a62cb2d3de2475c9a714878&o=&hp=1",
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/170443603.jpg?k=5d27d0cadfe48e88be3df75c6df9564d980761f22ccf3f18b0427d62d2af75c8&o=&hp=1",
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/170443081.jpg?k=343cbed2cc43c2cc0b2311cc4c1764c4506e673e7a62cb2d3de2475c9a714878&o=&hp=1",
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/170443839.jpg?k=5a066e53a1c89f5129e213d8d48d7e2c2e102be4dd9a52b1d20b00466cb646e6&o=&hp=1",
        },
    ];

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNum;
        if (direction === "l") {
            newSlideNum = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNum = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNum);
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="close"
                            onClick={() => setOpen(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={() => handleMove("l")}
                        />
                        <div className="slideWrapper">
                            <img
                                src={photos[slideNumber].src}
                                alt=""
                                className="sliderImg"
                            />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>44 Collier St, Barrie</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free
                        airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper">
                                <img
                                    onClick={() => handleOpen(index)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">
                                Stay in the heart of Barrie
                            </h1>
                            <p className="hotelDesc">
                                This hotel is located near downtown Barrie, just
                                off Highway 400. It features a daily continental
                                breakfast and its rooms have free Wi-Fi access
                                and a refrigerator. Guest rooms at Comfort Inn &
                                Suites also include cable TV. They have a
                                seating area and are furnished with a work desk.
                                The front desk at Comfort Inn & Suites is
                                staffed around the clock. There is an on-site
                                business centre, as well as meeting and banquet
                                facilities. Complimentary daily newspapers are
                                also provided. Centennial Park on Kempenflet Bay
                                is just a 3-minute drive from Comfort Inn &
                                Suites. Georgian Mall is 10.8 km away. Solo
                                travellers particularly like the location — they
                                rated it 8.3 for a one-person stay.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for 7-night stay!</h1>
                            <span>
                                Located in the real heart of Barrie, this
                                property has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$735</b> (7 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;
