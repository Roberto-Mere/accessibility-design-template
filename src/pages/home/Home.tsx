import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import AboutUs from './about-us/AboutUs';
import ContactUs from './contact-us/ContactUs';
import Hero from './hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
