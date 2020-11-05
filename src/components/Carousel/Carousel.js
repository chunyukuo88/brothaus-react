import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as CarouselDisplay } from 'react-responsive-carousel';
import { carouselGA } from "../../googleAnalytics/foto";

export default function Carousel() {
  return (
    <CarouselDisplay>
      <div>
        <img onClick={carouselGA} alt="" src="https://woobler-photos.s3.amazonaws.com/1-min.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img onClick={carouselGA} alt="" src="https://woobler-photos.s3.amazonaws.com/2-min.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img onClick={carouselGA} alt="" src="https://woobler-photos.s3.amazonaws.com/3-min.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img onClick={carouselGA} alt="" src="https://woobler-photos.s3.amazonaws.com/4-min.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img onClick={carouselGA} alt="" src="https://woobler-photos.s3.amazonaws.com/5-min.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img onClick={carouselGA} alt="" src="https://woobler-photos.s3.amazonaws.com/6-min.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img onClick={carouselGA} alt="" src="https://woobler-photos.s3.amazonaws.com/7-min.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img onClick={carouselGA} alt="" src="https://woobler-photos.s3.amazonaws.com/8-min.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </CarouselDisplay>
  );
};

