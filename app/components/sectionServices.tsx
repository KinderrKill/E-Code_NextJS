/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';

import backgroundFloorDecoration from '../assets/images/background_floor_decoration.svg';
import backgroundKinder from '../assets/images/background_kinder.svg';

import reactIcon from '../assets/icons/react.svg';
import svelteIcon from '../assets/icons/svelte.svg';
import backEndIcon from '../assets/icons/nodejs.svg';
import baasIcon from '../assets/icons/firebase.svg';
import javaIcon from '../assets/icons/java.svg';
import databaseIcon from '../assets/icons/database.svg';
import formationIcon from '../assets/icons/formation.svg';
import figmaIcon from '../assets/icons/figma.svg';
import premiereProIcon from '../assets/icons/premiere-pro.svg';

import './_serviceSection.scss';
import { useEffect } from 'react';
import SectionHeader from './shared/sectionHeader';

interface SkillCard {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
}

export default function SectionServices() {
  const items: SkillCard[] = [
    {
      icon: reactIcon,
      alt: 'Icône du framework React',
      title: 'Front-End',
      subtitle: 'React, Vue',
    },
    {
      icon: svelteIcon,
      alt: 'Icône du framework Svelte',
      title: 'Front-End: Server side',
      subtitle: 'Next, Nuxt, Svelte',
    },
    {
      icon: databaseIcon,
      alt: 'Icône de base de donnée',
      title: 'Base de donnée',
      subtitle: 'MongoDB, MySQL, SQLite, TypeORM',
    },
    {
      icon: backEndIcon,
      alt: 'Icône du framework Node.js',
      title: 'Back-End',
      subtitle: 'Node.js, Express, GraphQL, Rest, Nest',
    },
    {
      icon: baasIcon,
      alt: 'Icône du service Firebase',
      title: 'Services de Backend',
      subtitle: 'PocketBase, Firebase',
    },
    {
      icon: javaIcon,
      alt: 'Icône du langage java',
      title: 'Java',
      subtitle: 'JavaFX, Spring, Bukkit, MCP',
    },
    {
      icon: formationIcon,
      alt: 'Icône de formation',
      title: 'Formations',
      subtitle: 'Tutoriel vidéo, cour présentiel ou distanciel',
    },
    {
      icon: figmaIcon,
      alt: 'Icône du logiciel Figma',
      title: 'Design',
      subtitle: 'Figma, Photoshop',
    },
    {
      icon: premiereProIcon,
      alt: 'Icône du langage java',
      title: 'Vidéos',
      subtitle: 'Sony Vegas, Adobe Premiere, OBS',
    },
  ];

  // Effect for flare effect
  useEffect(() => {
    function handleOnMouseMove(event: MouseEvent, card: HTMLDivElement) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }

    document.querySelectorAll('.card').forEach((card) => {
      const cardElement = card as HTMLDivElement;
      cardElement.onmousemove = (e) => handleOnMouseMove(e, cardElement);
    });
  }, []);

  return (
    <div>
      <Image
        src={backgroundFloorDecoration}
        alt="Image d'un pattern de décoration au sol"
        className='absolute -mt-48 uw:hidden w-auto h-auto pointer-events-none'
      />
      <Image
        src={backgroundKinder}
        alt='Image représentative de KinderrKill'
        className='md:absolute md:block hidden md:left-[70%] -bottom-72 uw:-bottom-96 uw:w-[20%] right-0 xl:left-1/2 z-10 w-auto h-auto pointer-events-none'
      />

      <article className='container mx-auto relative flex flex-col justify-center items-center z-10'>
        <div className='flex flex-col items-center w-ffull h-full bg-[#171a34] rounded-lg shadow-md shadow-[#cc3b45] py-6 mt-10'>
          <SectionHeader id='Mes compétences' title='Mes compétences'>
            Découvrez mes diverses compétences avec un réel intêret pour les frameworks tels que React et Vue.js.
            <br></br> Je suis constamment à l'affût des nouvelles tendances et technologies pour offrir des solutions
            modernes et efficaces.
          </SectionHeader>
          <div className='w-[85%] uw:w-[70%] h-auto bg-opacity-50 mt-10 mx-10 flex flex-col justify-center items-center'>
            <article className='service-section__display grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {items.map((item, index) => (
                <div className='card-content select-none flex justify-center' key={index}>
                  <div className='card flex flex-col p-5'>
                    <div className='z-10'>
                      <Image src={item.icon} alt='' className='w-20 h-20 mb-5' />
                      <div className='w-full h-full flex flex-col whitespace-pre-wrap'>
                        <span className='text-2xl mb-5 underline text-gray-200'>{item.title}</span>
                        <p className='text-md'>{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </div>
        </div>
      </article>
    </div>
  );
}
