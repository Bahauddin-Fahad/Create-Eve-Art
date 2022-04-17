import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../../Assets/Banners/banner1.jpg";
import Banner2 from "../../../Assets/Banners/banner2.jpg";
import Banner3 from "../../../Assets/Banners/banner3.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
              Photography is a way of feeling, of touching, of loving. What you
              have caught on film is captured forever… It remembers little
              things, long after you have forgotten everything.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>I make photographs to understand what our lives mean to us.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Photography for me is not looking, it's feeling. If you can't feel
              what you're looking at, then you're never going to get others to
              feel anything when they look at your pictures.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
