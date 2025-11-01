import './App.css'
import PcNavbar from './components/layout/PcNavbar'
import MobileNavbar from './components/layout/MobileNavbar '
import SlideShow from './components/SlideShow'
import InfluencerArea from './components/InfluencerArea'
import Ads from './components/Ads'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <PcNavbar />
      
      <div>
        <InfluencerArea />
        <SlideShow />
        <Ads />
        <h1 style={{height:'500px'}}>
          home page
        </h1>
        <Footer />
      </div>


      <MobileNavbar />
    </>
  )
}

export default App
