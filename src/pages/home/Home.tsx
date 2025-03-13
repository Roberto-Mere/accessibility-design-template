import Header from '../../layout/header/Header';
import AboutUs from './about-us/AboutUs';
import Hero from './hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
      </main>
    </>
  );
}
