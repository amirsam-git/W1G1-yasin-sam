function Ads() {
    return (
        <div className="ads-area">
            <div className="col-lg-4 col-sm-2">
                <div><img src="/assets/img/ads/redbox.webp" alt="" />
                    <p className="adsp" style={{color: "red"}}>Demon rank</p>
                </div>
                <div><img src="/assets/img/ads/greenbox.png" alt="" />
                    <p className="adsp" style={{color: "lime"}}>Nature rank</p>
                </div>
                <div><img src="/assets/img/ads/bluebox.png" alt="" />
                    <p className="adsp" style={{color: "blue"}}>Angel rank</p>
                </div>
                <div><img src="/assets/img/ads/yellowbox.webp" alt="" />
                    <p className="adsp" style={{color: "yellow"}}>Sungod rank</p>
                </div>
            </div>
        </div>
    )
}

export default Ads