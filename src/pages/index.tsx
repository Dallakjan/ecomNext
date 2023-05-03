import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Trustpilot from '../components/Trustpilot';
import Pricing from '../components/Pricing';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Trustpilot />
      <Pricing />
      <Newsletter />
    </>
  );
}
