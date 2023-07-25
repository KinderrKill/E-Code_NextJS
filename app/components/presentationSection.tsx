/* eslint-disable react/no-unescaped-entities */
'use client';
import { useEffect } from 'react';
import { userOnMobile } from '../utils/constants';
import './_presentationSection.scss';

interface Recommandation {
  text: String;
  author: String;
  date: String;
}

export default function PresentationSection() {
  const items: Recommandation[] = [
    {
      text: "Étienne a effectué une excellente formation de Spécialiste DevOps et JavaScript, afin de se recentrer plus sur le web, et a été également certifié par la suite. Il aidait régulièrement ses camarades et est dans l'écoute des autres. Il sait s'adapter à tous types de situations, travailler avec d'autres corps de métiers par exemple en UI / UX design, et est toujours à la recherche de la meilleure solution aux problèmes logiciels posés.",
      author: 'Nicolas de La Passerelle',
      date: 'Le 20 juillet 2023',
    },
    {
      text: "Je travaille avec Etienne depuis fin 2018 sur un projet de jeu multi-joueurs particulièrement exigeant techniquement. Il faut mettre en œuvre des systèmes complexes et interconnectés, architecturés sous la forme de micro services. Nous travaillons en équipe sur des langages et frameworks web différents, en mode Kanban. Etienne relève sans difficulté ces défis et a toujours l'envie de fournir un code propre et de qualité.",
      author: 'Maxime de CompanyOfCube',
      date: 'Le 19 juillet 2023',
    },
  ];

  useEffect(() => {
    if (userOnMobile()) return;

    const blob = document.querySelector('.cursor-blob');
    if (!blob) return;

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 2000, fill: 'forwards' }
      );
    };

    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className='presentation-section overflow-hidden relative shadow-md shadow-black'>
        <div className='cursor-blob overflow-hidden z-0'></div>
        <div className='cursor-blob__blur overflow-hidden z-0'></div>

        <section className='presentation-section__display container mx-auto flex flex-col pt-16'>
          <div className='flex flex-col lg:flex-row gap-16'>
            <article className='w-screen md:w-1/3 flex justify-center md:justify-end'>
              <div className='presentation-section__card'>
                <div className='presentation-section__card--title'>
                  <span>
                    Etienne<br></br>Sauvage
                  </span>
                </div>
              </div>
            </article>
            <article className='w-full md:w-1/2 px-5 md:px-0'>
              <h4 className='font-bold mb-5 text-4xl'>Bonjour !</h4>
              <p>
                Passionné par le développement java depuis plus de 10 ans, j'ai effectué une reconversion
                professionnelle dans le développement Web afin d'associer passion et travail sans pour autant mélanger
                les langages.
                <br></br>
                <br></br>
                J'ai effectué une formation de développeur full-stack JavaScript en 2022 qui m'a permis de décrocher la
                certification de Concepteur développeur application et depuis je peux dire que je suis épanoui tant dans
                la vie personnelle et professionnelle.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-7'>
                <div className='flex flex-col'>
                  <span className='text-ecRed font-bold underline text-lg'>Email :</span>
                  <a href='mailto:sauvage-etienne@hotmail.com'>sauvage-etienne@hotmail.com</a>
                </div>
                <div className='flex flex-col'>
                  <span className='text-ecRed font-bold underline text-lg'>LinkedIn :</span>
                  <a href='https://www.linkedin.com/in/etienne-sauvage/'>linkedin.com/etienne-sauvage</a>
                </div>
                <div className='flex flex-col'>
                  <span className='text-ecRed font-bold underline text-lg'>Github :</span>
                  <a href='https://github.com/KinderrKill'>github.com/KinderrKill</a>
                </div>
                <div className='flex flex-col'>
                  <span className='text-ecRed font-bold underline text-lg'>Youtube :</span>
                  <a href='https://www.youtube.com/@KinderrKill'>youtube.com/@KinderrKill</a>
                </div>
              </div>
            </article>
          </div>
          <section className='pt-16 container'>
            <article className='text-center lg:text-left'>
              <h2 className='text-4xl'>Ils me recommande</h2>
              <span className='text-gray-400 italic'>
                (Recommandation visible sur{' '}
                <a href='https://www.codeur.com/-ecode/recommendations' target='_blank'>
                  codeur.com)
                </a>
              </span>
            </article>

            <article className='grid lg:grid-cols-2 grid-cols-1 gap-10 py-10 mx-5'>
              {items.map((item, index) => (
                <blockquote
                  className='bg-[#101322] ring-2 ring-[#898fcc] p-6 rounded-lg shadow-lg b drop-shadow-lg'
                  key={index}>
                  <p className='text-lg italic mb-4'>{item.text}</p>
                  <cite className='block font-semibold'>{item.author}</cite>
                  <p className='text-gray-300'>{item.date}</p>
                </blockquote>
              ))}
            </article>
          </section>
        </section>
      </div>
    </>
  );
}
