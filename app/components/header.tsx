import backgroundPlanetRocket from '../assets/images/background_planet_rocket.svg';
import backgroundFloatingPlanet from '../assets/images/background_floating_planet.svg';
import backgroundBase from '../assets/images/background_base.svg';

import backgroundFirstLamp from '../assets/images/background_first_lamp.svg';
import backgroundSecondLamp from '../assets/images/background_second_lamp.svg';
import backgroundLastLamp from '../assets/images/background_last_lamp.svg';

import backgroundCouch from '../assets/images/background_couch.svg';

import Image from 'next/image';
import Console from './console';

type BackgroundImage = {
  img: string;
  alt: string;
  style?: string;
};

export default function Header() {
  const backgroundImages: BackgroundImage[] = [
    { img: backgroundFloatingPlanet, alt: "Image de fond d'une petite planète", style: 'animation__rotate' },
    {
      img: backgroundPlanetRocket,
      alt: "Image de fond d'une planète et d'une fusée",
      style: 'animation__small-rotate object-cover lg:object-fill',
    },
    { img: backgroundBase, alt: 'Image de fond principale' },
    { img: backgroundCouch, alt: "Image d'un fauteuil", style: 'z-10 hidden xl:block' },

    { img: backgroundFirstLamp, alt: "Image d'une lampe au plafond" },
    { img: backgroundSecondLamp, alt: "Image d'une lampe au plafond" },
    { img: backgroundLastLamp, alt: "Image d'une lampe au plafond" },
  ];

  return (
    <header className='relative h-full overflow-hidden'>
      {backgroundImages.map((item, index) => (
        <Image
          key={index}
          src={item.img}
          alt={item.alt}
          className={'absolute top-0 left-0 w-screen h-full pointer-events-none ' + (item.style ?? '')}
        />
      ))}

      <article
        className='content-panel w-full sm:h-1/3 h-1/2 absolute top-1/4 left-0 px-5 ml-
        lg:w-[50%] xl:w-[40%] lg:left-32 lg:h-2/5'>
        <Console />
      </article>
    </header>
  );
}
