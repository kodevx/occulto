import React from 'react';

const LettersAnimation: React.FC = () => {
  return (
    <div className='flex flex-row font-replay text-black'>
        <div className='flex justify-center items-center h-30 after:content-["A"] after:animate-uppercasev1-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["@"] after:animate-symbols-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["b"] after:animate-lowercasev2-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["0"] after:animate-numbers-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["f"] after:animate-lowercasev1-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["b"] after:animate-lowercasev2-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["f"] after:animate-lowercasev1-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["0"] after:animate-numbers-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["B"] after:animate-uppercasev2-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["A"] after:animate-uppercasev1-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["@"] after:animate-symbols-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["@"] after:animate-symbols-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["B"] after:animate-uppercasev2-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["b"] after:animate-lowercasev2-letters-change after:text-4xl mr-0.5' />
        <div className='flex justify-center items-center h-30 after:content-["@"] after:animate-symbols-change after:text-4xl mr-0.5' />
    </div>
  ) 
}

export default LettersAnimation;
