import Navbar from './Navbar/Navbar.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Game from './Game/Game.js';
import Latest from './Latest/Latest.js';
/* <Sliderp />
import Sliderp from './Sliderp';
import Game from './Game/Game.js';
 <Game />
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Game />
        <Latest/>
      </div>
    </BrowserRouter>
  );
}

export default App;
