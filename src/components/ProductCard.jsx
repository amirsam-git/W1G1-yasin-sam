import { useState, useEffect } from "react";

export default function ProductCard() {

    const [seconds, setSeconds] = useState(59);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (prev === 0) return 59;  //restart or you can stop it
                return prev - 1;
            });
        }, 1000);

        const colors = ["#ff2d2d", "#f5f5f5", "#2dff2d"];


        return () => clearInterval(interval);
    }, []);

    return (

        <div>
            <div className="offers-text">
                <p>
                    {"Christmas OFF".split("").map((char, index) => {
                        const colors = ["#ff2d2d", "#f5f5f5", "#2dff2d"];
                        return (
                            <span key={index} style={{ color: colors[index % colors.length] }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        );
                    })}
                </p>
            </div>

            <div className="offers-text">
                <p>
                    {"(Limited Time)".split("").map((char, index) => {
                        const colors = ["#ff2d2d", "#f5f5f5", "#2dff2d"];
                        return (
                            <span key={index} style={{ color: colors[index % colors.length] }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        );
                    })}
                </p>
            </div>





            <div className="product-card">
            <div className=" rank-row ">
                <div className="item-start">
                    <div className="product-card-img-area">
                        <img src="/assets/img/offer/demon crown.png" alt="" />
                        <p>special sale</p>
                        <p>5:36: {seconds}</p>
                    </div>
                    <div>
                        <p className="rank-card product-card-title product-card-title-demon">Demon rank</p>
                        <p>30d</p>
                        <p>
                            <i class="bi bi-hammer"></i>
                            <span>SkyMine</span>
                        </p>
                        <p className="first-price">50.99$</p>
                        <p className="off-price">35.99$</p>
                    </div>
                </div>

                <div className="item-start">
                    <div className="product-card-img-area">
                        <img src="/assets/img/offer/angel crown.png" alt="" />
                        <p>special sale</p>
                        <p>5:36: {seconds}</p>
                    </div>
                    <div>
                        <p className="rank-card product-card-title product-card-title-angel">Angel rank</p>
                        <p>30d</p>
                        <p>
                            <i class="bi bi-hammer"></i>
                            <span>SkyMine</span>
                        </p>
                        <p className="first-price">35.99$</p>
                        <p className="off-price">25.99$</p>
                    </div>
                </div>
            </div>








            <div className=" rank-row">
                <div className="item-start">
                    <div className="product-card-img-area">
                        <img src="/assets/img/offer/nature crown.png" alt="" />
                        <p>special sale</p>
                        <p>5:36: {seconds}</p>
                    </div>
                    <div>
                        <p className="rank-card product-card-title product-card-title-nature">Nature rank</p>
                        <p>30d</p>
                        <p>
                            <i class="bi bi-hammer"></i>
                            <span>SkyMine</span>
                        </p>
                        <p className="first-price">16.99$</p>
                        <p className="off-price">11.99$</p>
                    </div>
                </div>


                <div className="item-start">
                    <div className="product-card-img-area">
                        <img src="/assets/img/offer/sungod crown.png" alt="" />
                        <p>special sale</p>
                        <p>5:36: {seconds}</p>
                    </div>
                    <div>
                        <p className="rank-card product-card-title product-card-title-sungod">SunGod rank</p>
                        <p>30d</p>
                        <p>
                            <i class="bi bi-hammer"></i>
                            <span>SkyMine</span>
                        </p>
                        <p className="first-price">9.99$</p>
                        <p className="off-price">7.99$</p>
                    </div>
                </div>
            </div>




            <div className="store-text">
                <p>
                    Store
                </p>
            </div>




            <div className="store-items">
                <div className="product-card">
                    <div className="item-start">
                        <div className="product-card-img-area">
                            <img src="/assets/img/key2.png" alt="" />
                        </div>
                        <div>
                            <p className=" product-card-title product-card-title-Lightining-key">Lightining key</p>
                            <p id="legendray-text-key-store">Legendray</p>
                            <p>
                                <span>Survival</span>
                            </p>
                            <p className="off-price">7.99$</p>
                        </div>
                    </div>
                </div>




                <div className="product-card">
                    <div className="item-start">
                        <div className="product-card-img-area">
                            <img src="/assets/img/key3.png" alt="" />
                        </div>
                        <div>
                            <p className=" product-card-title product-card-title-starite-key">Starite key</p>
                            <p id="prismatic-text-key-store">Prismatic</p>
                            <p>
                                <span>Survival</span>
                            </p>
                            <p className="off-price">15.99$</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>












        </div>

    )
}
