import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../../Assets/images/banners/banner4.jpg";
import Banner2 from "../../../Assets/images/banners/banner5.jpg";
import Banner3 from "../../../Assets/images/banners/banner6.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption className="flex h-full justify-center items-center">
            <div>
              <h3>The Power Of Photography</h3>
              <p className="w-9/12 mx-auto hidden sm:block lg:block">
                Photography is a way of feeling, of touching, of loving. What
                you have caught on film is captured forever… It remembers little
                things, long after you have forgotten everything.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption className="flex h-full justify-center items-center">
            <div>
              <h3>My Photography Aims</h3>
              <p className="w-9/12 mx-auto hidden sm:block lg:block">
                I make photographs to understand what our lives mean to us,to
                understand how we are so much dependent to the livings around
                Us.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption className="flex h-full justify-center items-center">
            <div>
              <h3>Photography Is My Feelings</h3>
              <p className="w-9/12 mx-auto hidden sm:block lg:block">
                Photography for me is not looking, it's feeling. If you can't
                feel what you're looking at, then you're never going to get
                others to feel anything when they look at your pictures.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
