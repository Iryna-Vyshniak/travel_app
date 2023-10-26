import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section';

const HeroSection = () => {
  return (
    <Section id='#home' variant='w-screen h-screen flex flex-col gap-20 md:gap-28'>
      <Hero />
    </Section>
  );
};

export default HeroSection;
