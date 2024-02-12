import '../index.css';
import './Board2.css';
//Temporary Clock
import Clock from '../Components/Clock'
import ScrollQueue from '../Components/ScrollQueue/ScrollQueue'
import Song from '../Components/Song/Song'
import Video from '../Components/Video/Video'




function App() {

  return (
    <div className='container'>
      <body>
        <div className = "lefty">
          <div className = "clock">
            <Clock></Clock>
          </div>
          <div className = "video">
            <Video></Video>
          </div>
        </div>
        <div className="righty">
          <div className = "song">
            <Song></Song>
          </div>
          <div className = "scroll-queue">
            <ScrollQueue></ScrollQueue>
          </div>
        </div>
      </body>
    </div>
  )
}

export default App;
