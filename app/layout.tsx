import './globals.scss';

export const metadata = {
  title: 'E-Code',
  description: 'Crafted with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
}
