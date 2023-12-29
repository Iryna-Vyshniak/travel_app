'use client';
import { backdropVariant, dropIn } from '@/shared/utils.ts/motion';
import { AnimatePresence, motion } from 'framer-motion';

type ModalProps = {
  modal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const Modal = ({ modal, closeModal, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          className='absolute top-0 left-0 z-40 bg-white/50 h-screen w-full grid place-items-center'
          variants={backdropVariant}
          initial='hidden'
          animate={modal ? 'visible' : 'hidden'}
          exit='hidden'
          onClick={closeModal}
        >
          <div className='px-5 fixed h-full w-full flex items-center justify-center top-0 left-0'>
            <motion.div
              variants={dropIn}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='absolute z-50 h-[50vh] max-w-md w-full flex items-center justify-center p-5 bg-green-80 rounded-xl text-white'
            >
              <button
                onClick={closeModal}
                className='absolute top-0 right-0 -mt-4 -mr-4 bg-white text-green-80 border border-green-80 h-8 w-8 block mb-2 rounded-full'
              >
                &times;
              </button>
              {/* <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-center space-y-8 max-w-md w-full h-auto'> */}
              {children}
              {/* </div> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
              onClick={closeModal}
              className='bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0'
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
