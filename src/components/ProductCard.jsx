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

        return () => clearInterval(interval);
    }, []);

    return (

        <div>


            
            
        <div className="product-card rank-row">
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
                    <p>Fly,Specte,Glow,...</p>
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
                    <p>Fly,Glow,...</p>
                </div>
            </div>
        </div>







                
        <div className="product-card rank-row">
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
                         <p>Glow,..</p>
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
                         <p>Glow,Ec,Fly,...</p>
                     </div>
                 </div>
             </div>
        




        </div>
    )
}
