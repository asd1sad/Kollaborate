import Navbar from './Navbar/Navbar.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Sliderp from './Sliderp';
import Game from './Game/Game.js';
import Game2 from './Game2/Game2.js';
import Latest from './Latest/Latest.js';
/* <Sliderp />
 <Game />
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
       
        <Game2 />
        <Latest/>
      </div>
    </BrowserRouter>
  );
}

export default App;
