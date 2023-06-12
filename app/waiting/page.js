import { Footer, Navbar } from '../../components';
import { HeroLP, WaitingForm } from '../../sections';

const WaitingPage = () => (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <HeroLP />
      <WaitingForm />
      <Footer />
    </div>
  );
  
  export default WaitingPage;