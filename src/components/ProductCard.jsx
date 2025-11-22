import { useState, useEffect } from "react";

export default function ProductCard() {

    const [seconds, setSeconds] = useState(59);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (prev === 0) return 59; // restart or you can stop it
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="product-card">
            <div>
                <div className="d-flex item-start">
                    <div className="product-card-img-area">
                        <img src="/assets/img/phones/mobile1.webp" alt="" />
                        <p>special sale</p>
                        <p>5:36: {seconds}</p>
                    </div>
                    <div>
                        <p className="product-card-title">iPhone 15 black 256 2025</p>
                        <p>blue</p>
                        <p>Digikala</p>
                        <p>
                            <i class="bi bi-mailbox2"></i>
                            <span>Post package</span>
                        </p>
                        <p>Europ, US, UK</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
