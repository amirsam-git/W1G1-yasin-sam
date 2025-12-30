import { Link } from "react-router-dom";

function Ads() {
    return (
        <div>

            <div className="ads-limited-time">
                <p>Limited Time</p>
            </div>


            <div>
                <div className="ads-mobile-area">

                    <div>
                        <Link to="/card">
                            <img src="/assets/img/ads/redbox.webp" alt="" />
                        </Link>
                        <p className="adsp" style={{ color: "red" }}>Demon rank</p>
                    </div>

                    <div>
                        <Link to="/card">
                            <img src="/assets/img/ads/greenbox.png" alt="" />
                        </Link>
                        <p className="adsp" style={{ color: "lime" }}>Nature rank</p>
                    </div>

                    <div>
                        <Link to="/card">
                            <img src="/assets/img/ads/bluebox.png" alt="" />
                        </Link>
                        <p className="adsp" style={{ color: "blue" }}>Angel rank</p>
                    </div>

                    <div>
                        <Link to="/card">
                            <img src="/assets/img/ads/yellowbox.webp" alt="" />
                        </Link>
                        <p className="adsp" style={{ color: "yellow" }}>Sungod rank</p>
                    </div>

                </div>
            </div>


            <p>
                <Link to="/card"></Link>
            </p>
        </div>

    )
}

export default Ads