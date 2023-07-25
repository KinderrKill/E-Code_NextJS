/* eslint-disable react/no-unescaped-entities */

import SectionHeader from './shared/sectionHeader';
import maltLogo from '../assets/images/malt-logo.webp';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <>
      <div className='pt-16 bg-primary'>
        <SectionHeader id='contactMe' title='Travaillons ensemble'>
          Je suis disponible pour discuter de tout type de projet, de la création de sites web à la conception
          d'applications mobiles. Je suis impatient de travailler avec vous et de vous aider à réaliser votre projet
          avec succès
        </SectionHeader>
        {/* FORM */}
        <section className='py-10'>
          <a href='https://www.malt.fr/profile/etiennesauvage' className='container mx-auto'>
            <Image src={maltLogo} alt='' className='container mx-auto w-72 rounded-lg' />
          </a>
        </section>
      </div>
    </>
  );
}
