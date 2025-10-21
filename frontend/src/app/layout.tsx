import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const metadata = {
  title: 'Synergie Positive',
  description: 'Site officiel de l’association Synergie Positive',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
