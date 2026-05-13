import Navbar from '@/Components/Navbar';
import './globals.css';
import Footer from '@/Components/Footer';

export const metadata = {
  title: 'Powermetica | AI Agents & Software Development',
  description:
    'We build AI agents, intelligent automation systems, SaaS platforms, chatbots, and custom software solutions for modern businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>


      <body>
        <Navbar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
