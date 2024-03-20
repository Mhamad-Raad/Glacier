import HeroSection from '@/Components/about/HeroSection';
import AboutUs from '@/Components/about/AboutUsSection/AboutUs';
import Mission from '@/Components/about/MissionSection/Mission';
import Team from '@/Components/about/TeamSection/Team';
import Benifits from '@/Components/about/Benifits/Benifits';

const About = () => {
  return (
    <section className="overflow-hidden">
      <HeroSection />
      <AboutUs />
      <Mission />
      <Team />
      <Benifits />
    </section>
  );
};

export default About;
