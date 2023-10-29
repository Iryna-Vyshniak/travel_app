import Hero from '@/components/Hero/Hero';

const HeroSection = () => {
  return (
    <div className='h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-hero'>
      <Hero />
    </div>
  );
};

export default HeroSection;
