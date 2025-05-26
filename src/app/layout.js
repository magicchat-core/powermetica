import Navbar from '@/Components/Navbar';
import './globals.css';

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
      </body>
    </html>
  );
}
