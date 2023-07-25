import './globals.scss';

export const metadata = {
  title: 'E-Code | Développeur Fullstack indépendant Normandie',
  description: 'Site portefolio de Etienne S.',
  keywords: [
    'Développeur web Java',
    'Java full-stack',
    'Freelance web',
    'Développeur indépendant',
    'Le Havre',
    'Normandie',
    'Formateur en développement web',
    'Tutoriels Java',
    'Programmation Java',
    'Streaming en direct',
    'Développement de sites web',
    'Vidéos tutorielles',
    'Coder en direct',
    'Formation en ligne',
    'Cours de développement Java',
    'Compétences Java',
    'Projets de développement',
    'Solutions web sur mesure',
    'Création de sites web',
    'Développeur back-end Java',
    'Front-end Java',
    "Développement d'applications web",
    'HTML',
    'CSS',
    'JavaScript',
    'Solutions e-commerce',
    'Création de sites responsives',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
}
