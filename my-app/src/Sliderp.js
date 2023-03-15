import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ps from './assets/bacvk.png';
import psa from './assets/step.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Sliderp = () => {
  return (
    <div style={{ height: "80vh", overflow: "hidden" }}>
      <Slider {...settings} style={{ width: "100%" }} >
        <div>
          <img src={ps} alt="img1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={psa} alt="img2" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default Sliderp;
