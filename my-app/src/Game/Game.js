import psa2 from "../assets/c.png";
import "./Game.css";

export const Game = () => {
  return (
      <div className="flex-container text-center fotoFondo">
        <div className="flex-item1 fotoATope">
            <img id="fotoCastleIn"src={psa2} alt="img5" />
        </div>
        <div className="flex-item2 ">
            <p id="texto">
              Get ready to embark on the ultimate adventure with Castle in the
              Woods - the game that will transport you to a world of excitement
              and mystery!<br></br><br></br> With stunning modern graphics and immersive gameplay,
              Castle in the Woods will have you on the edge of your seat as you
              explore enchanted forests, conquer dangerous obstacles, and
              unravel ancient secrets.<br></br><br></br> Don't just play a game, experience the
              thrill of adventure like never before with Castle in the Woods.<br></br>
              Join now and let the journey begin!
            </p>
            <p id="texto2">
            Join now and let the journey begin!
            </p>
            <div className="playLearn">
              <a className="no-underline" href="https://play.unity.com/mg/other/webgl-builds-323687">
                <p id="playnow">Play Now</p> 
              </a>
              <a className="underline" href="https://twitter.com/CarlosMaslaton?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <p id="learnMore">Learn More</p>
              </a>
            </div>
        </div>
      </div>
  );
};


