import Navbar from './Navbar.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Sliderp from './Sliderp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sliderp />
        <div className="text-container">
          <p style={{color: '#D0BC90'}}>
            Get ready to embark on the ultimate adventure with Castle in the Woods - the game that will transport you to a world of excitement and mystery!
            With stunning modern graphics and immersive gameplay, Castle in the Woods will have you on the edge of your seat as you explore enchanted forests, conquer dangerous obstacles, and unravel ancient secrets.
            Don't just play a game - experience the thrill of adventure like never before with Castle in the Woods. Join now and let the journey begin!
          </p>
          <button style={{ backgroundColor: '#23533A', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Play Now</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
