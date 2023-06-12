import { Footer, Navbar } from '../../components';
import { HeroLP, ContactForm } from '../../sections';

const ContactPage = () => (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <HeroLP />
      <ContactForm />
      <Footer />
    </div>
  );
  
  export default ContactPage;