import { Footer, Navbar } from '../../components';
import { HeroLP, TermsConditions } from '../../sections';

const TermsConditionsPage = () => (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <HeroLP />
      <TermsConditions />
      <Footer />
    </div>
  );
  
  export default TermsConditionsPage;