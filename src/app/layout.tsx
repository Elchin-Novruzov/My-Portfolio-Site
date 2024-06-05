import Header from '../common/Header';
const Footer = dynamic(() => import('@/common/Footer'));
import 'aos/dist/aos.css';
import '../css/globals.css';
import dynamic from 'next/dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/programming.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <meta name="description" content="Elchin Novruzov personal website. This is a place where you can find my projects and information about me." />
        <meta name="keywords" content="Elchin Novruzov, Elchin (Elçin) Novruzov, Elçin Novruzov, Elcin Novruzov, Web Developer, Front-end developer, Html, Css, Js, Javascript, React, React.js, Next js, Node, Node.js" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Elchin Novruzov" />
        <title>Elchin Novruzov | Portfolio</title>
      </head>
      <body id="home">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
