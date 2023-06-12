import { Footer, Navbar } from '../../components';
import { HeroLP, Insights } from '../../sections';

const InsightPage = () => (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <HeroLP />
      <Insights />
      <Footer />
    </div>
  );
  
  export default InsightPage;