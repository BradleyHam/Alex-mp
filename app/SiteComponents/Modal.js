'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      setTimeout(() => setIsVisible(true), 50); // Slight delay to trigger the CSS transition
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setShowModal(false), 300); // Match this delay with the transition duration
  };

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-[#662335] mx-5 rounded-lg shadow-lg  max-w-lg mx-auto transition-transform transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <Image src={'/images/flyer.jpeg'} width={500} height={500} alt={'flyer'} />
        <button
          onClick={closeModal}
          className="bg-primaryAccent font-bold mx-4 mb-4 px-4 py-2 rounded  transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
