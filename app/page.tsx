'use client';
import React, { useEffect, useRef } from 'react';

import ContactSection from './components/contactSection';
import Header from './components/header';
import PortfolioSection from './components/portfolioSection';
import PresentationSection from './components/presentationSection';
import SectionServices from './components/sectionServices';

import RocketIcon from './assets/rocket.webp';
import Image from 'next/image';
import Footer from './components/shared/footer';

export default function Home() {
  const scrollToTopButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const currentButtonRef = scrollToTopButtonRef.current;
    if (!currentButtonRef) return;

    window.addEventListener('scroll', () => displayScrollToTopButton(currentButtonRef));

    return () => {
      window.removeEventListener('scroll', () => displayScrollToTopButton(currentButtonRef));
    };
  }, [scrollToTopButtonRef]);

  return (
    <main>
      <section className='h-screen bg-gradient-to-b from-[#d47a60] to-[#7f54c1]'>
        <Header />
        {/* <ResponsiveDebugDisplay /> */}
      </section>

      <section>
        <SectionServices />
        <PortfolioSection />
        <PresentationSection />
        <ContactSection />
      </section>

      <Footer />

      {/* Scroll to top button */}
      <span
        ref={scrollToTopButtonRef}
        className='fixed sm:block -bottom-20 right-3 z-10 w-10 transition-all 
        hover:animate-pulse cursor-pointer hover:scale-110 '
        onClick={scrollToTop}>
        <Image src={RocketIcon} className='-rotate-45' alt='Rocket icons created by Freepik - Flaticon' />
      </span>
    </main>
  );
}

function scrollToTop(event: React.MouseEvent): void {
  event.preventDefault();
  window.scrollTo(0, 0);
}

function displayScrollToTopButton(button: HTMLButtonElement | null): void {
  if (!button) return;

  if (window.pageYOffset > document.documentElement.clientHeight) button.style.bottom = '1.5rem';
  else button.style.bottom = '-5rem';
}

// Utils for responsive design bases on Tailwind breakpoint
function ResponsiveDebugDisplay(): JSX.Element {
  return (
    <div className='fixed top-0 left-0 bg-black p-2 z-10 flex flex-col'>
      <span className='text-red-500 2xl:text-green-500'>DEBUG 2XL</span>
      <span className='text-red-500 xl:text-green-500'>DEBUG XL</span>
      <span className='text-red-500 lg:text-green-500'>DEBUG LG</span>
      <span className='text-red-500 md:text-green-500'>DEBUG MD</span>
      <span className='text-red-500 sm:text-green-500'>DEBUG SM</span>
    </div>
  );
}
