import './App.css';

import Textfield from './components/Textfield';
import TextArea from './components/Textarea';
import Counter from './components/Counter';
import Footer from './customComponents/Footer';

import EncryptionButtons from './customComponents/EncryptionButtons';
import CharactersAnimation from './components/CharactersAnimation';

import useApp from './customHooks/App/useApp';

import {
   DECREMENT_SHIFT, 
   INCREMENT_SHIFT 
} from './constants/constants';

const App = () => {

    const { 
      shift,
      isBusy,
      inputText,
      outputText,
      handleShift,
      handleInputText,
      handleEncryption,
      handleDecryption
    } = useApp();

  return (
    <div className='w-full p-10 shadow-2xl rounded-4xl shadow-gray-200 bg-white'>
      <div className='flex justify-center'>
        <div className='font-replay text-3xl text-emerald-500 -skew-y-3 sm:text-5xl m-14 px-3 pt-2 items-center bg-emerald-100 outline-none'>
          O C C U L T O .
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-around items-center'>
        <div className='flex flex-row font-alan relative'>
          <Textfield 
            value={inputText}
            handleOnChange={handleInputText}
            placeholder={'Enter text to encrypt...'}
            styles={'h-14 w-[320px] xs:w-[380px] sm:w-[380px] md:w-[500px] lg:w-[700px] text-lg placeholder-gray-300 font-medium rounded-full p-5 shadow-gray-300 shadow-xl outline-none'}
          />
          <EncryptionButtons 
            isBusy={isBusy}
            inputText={inputText}
            handleEncryption={handleEncryption} 
            handleDecryption={handleDecryption}
          />
        </div>
        <Counter 
          value={shift}
          handleIncrement={() => handleShift(INCREMENT_SHIFT)} 
          handleDecrement={() => handleShift(DECREMENT_SHIFT)} 
        />
      </div>
      <div className='flex justify-center mb-5'>
        <TextArea 
          content={
            isBusy 
              ? <CharactersAnimation /> 
              : outputText
          } 
          placeholder={'QwkclsiDkOievnsS ....'} 
          styles={{
            root: `w-[310px] xs:w-[400px] sm:w-[450px] md:w-[670px] lg:w-[900px] text-lg sm:text-xl lg:text-2xl h-64 border-4 border-red-200 font-alan text-black font-bold mt-10 rounded-lg p-8 shadow-2xl outline-none overflow-auto`,
            placeholder: 'text-gray-300'
          }} 
        />
      </div>
      <Footer />
    </div>
  )
}

export default App;
