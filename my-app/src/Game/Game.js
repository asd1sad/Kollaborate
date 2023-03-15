import psa2 from '../assets/c.png';
import fondo from '../assets/bacvk.png';
import './Game.css'; // Importa tu archivo CSS aquí

const Game = () => {
  return (
    <div>
      <div className='lugarACompartir'>
        <div className="fotoFondo">
          <img src={fondo} alt="img3" />
        </div>
        <div className='fotoATopeYTextoContainerBro'>
          <div className="fotoATope">
            <img src={psa2} alt="img5" />
          </div>
          <div className="texto-container">
            <div className="texto">
              <p>
                Get ready to embark on the ultimate adventure with Castle in the Woods - the game that will transport you to a world of excitement and mystery! With stunning modern graphics and immersive gameplay, Castle in the Woods will have you on the edge of your seat as you explore enchanted forests, conquer dangerous obstacles, and unravel ancient secrets. Don't just play a game - experience the thrill of adventure like never before with Castle in the Woods. Join now and let the journey begin!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='btn'>
        <button>Play Now</button>
      </div>
    </div>
  );
}

export default Game;