import Navbar from '@/Components/Navbar';
import './globals.css';
import Footer from '@/Components/Footer';

export const metadata = {
  title: 'Your Site Title',
  description: 'Your Site Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>

        <Footer/>
      </body>
    </html>
  );
}
