import './App.css'
import PcNavbar from './components/layout/PcNavbar'
import MobileNavbar from './components/layout/MobileNavbar '
import SlideShow from './components/SlideShow'
import InfluencerArea from './components/InfluencerArea'

function App() {
  return (
    <>
      <PcNavbar />
      
      <div>
        <InfluencerArea />
        <SlideShow />
        <h1>
          home page
        </h1>
      </div>
      <MobileNavbar />
    </>
  )
}

export default App
