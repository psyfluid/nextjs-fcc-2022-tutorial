import { Header } from './Header';
import { Footer } from './Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className={`${inter.className}`}>{children}</main>
      <Footer />
    </div>
  );
};
