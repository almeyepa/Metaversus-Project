import { Footer, Navbar } from '../../components';
import { HeroLP, About, GetStarted, WhatsNew } from '../../sections';

const AboutPage = () => (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <HeroLP />
      <About />
      <GetStarted />
      <WhatsNew />
      <Footer />
    </div>
  );
  
  export default AboutPage;