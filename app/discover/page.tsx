'use client';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal';
import PageWrapper from '@/components/PageWrapper';
import AboutSection from '@/section/AboutSection';
import ActivitySection from '@/section/ActivitySection';
import BookingSection from '@/section/BookingSection';
import CampingSection from '@/section/CampingSection';
import GallerySection from '@/section/GallerySection';
import GuideSection from '@/section/GuideSection';
import useModal from '@/shared/hooks/useModal';

const Home = () => {
  const [modal, openModal, closeModal, toggleModal] = useModal(false);
  return (
    <PageWrapper>
      <motion.div
        animate={{
          scale: modal ? 0.8 : 1,
          opacity: modal ? 0.2 : 1,
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className='relative'
      >
        <CampingSection {...{ modal, openModal, closeModal, toggleModal }} />
        <AboutSection />
        <GallerySection />
        <ActivitySection />
        <BookingSection />
        <GuideSection />
        <Footer />
      </motion.div>
      {modal && <Modal {...{ modal, closeModal }}>VIDEO WILL BE HERE</Modal>}
    </PageWrapper>
  );
};

export default Home;
