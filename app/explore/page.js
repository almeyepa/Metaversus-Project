import { Footer, Navbar } from '../../components';
import { HeroLP, ExploreLP, World } from '../../sections';

const WorldPage = () => (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <HeroLP />
      <ExploreLP />
      <World />
      <Footer />
    </div>
  );
  
  export default WorldPage;