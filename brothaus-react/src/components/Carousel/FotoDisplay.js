import React from 'react';
import '../../css/carousel.css';
import { Carousel as CarouselDisplay } from 'react-responsive-carousel';
import captions from './captions';

/**
 * Dynamically populating the contents of <CarouselDisplay> is not possible with the react-responsive-carousel
 * library. Doing so results in browser console errors and the images show up but the captions bunch up.
 * */

const _buildFotoSource = (integer) => `https://woobler-photos.s3.amazonaws.com/${integer}-min.jpg`;

export default function FotoDisplay(){
    return(
    <CarouselDisplay>
      <div>
        <img alt="" src={_buildFotoSource(1)} />
        <p className="legend">{captions[1]}</p>
      </div>
      <div>
        <img alt="" src={_buildFotoSource(2)} />
        <p className="legend">{captions[2]}</p>
      </div>
      <div>
        <img alt="" src={_buildFotoSource(3)} />
        <p className="legend">{captions[3]}</p>
      </div>
      <div>
        <img alt="" src={_buildFotoSource(4)} />
        <p className="legend">{captions[4]}</p>
      </div>
      <div>
        <img alt="" src={_buildFotoSource(5)} />
        <p className="legend">{captions[5]}</p>
      </div>
      <div>
        <img alt="" src={_buildFotoSource(6)} />
        <p className="legend">{captions[6]}</p>
      </div>
      <div>
        <img alt="" src={_buildFotoSource(7)} />
        <p className="legend">{captions[7]}</p>
      </div>
      <div>
        <img alt="" src={_buildFotoSource(8)} />
        <p className="legend">{captions[8]}</p>
      </div>
    </CarouselDisplay>
  );
}
