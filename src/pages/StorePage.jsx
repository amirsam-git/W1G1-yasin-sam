import SlideShow from '../components/SlideShow'
import InfluencerArea from '../components/InfluencerArea'
import Ads from '../components/Ads'

export default function StorePage() {
  return (
    <>
      <div>
        <InfluencerArea />
        <SlideShow />
        <Ads />
        <div id='ip-center'>
        <h1 id='ip-text'>
          IP:SoulSmp.net
        </h1>
        </div>
      </div>
    </>
  )
}
