import './App.css';
import Textfield from './components/Textfield';
import TextArea from './components/Textarea';
import EncryptionButtons from './customComponents/EncryptionButtons';

import useApp from './customHooks/App/useApp';

const App = () => {

  const { 
      inputText,
      encryptedText,
      handleInputText,
      handleEncryption
   } = useApp();

  return (
    <div className='w-full p-10 shadow-2xl rounded-4xl shadow-gray-200 bg-white'>
      <div className='flex justify-center'>
        <div className='font-replay text-3xl text-emerald-500 -skew-y-3 sm:text-5xl m-14 px-3 pt-2 items-center bg-emerald-100 outline-none'>
          E N C R Y P T O .
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-row font-alan relative'>
          <Textfield 
            value={inputText}
            handleOnChange={handleInputText}
            placeholder={'Enter text to encrypt...'}
            styles={'h-14 w-[320px] xs:w-[380px] sm:w-[380px] md:w-[600px] lg:w-[800px] text-lg placeholder-gray-300 font-medium rounded-full p-5 shadow-gray-300 shadow-xl outline-none'}
          />
          <EncryptionButtons handleClick={handleEncryption} />
        </div>
      </div>
      <div className='flex justify-center mb-5'>
        <TextArea 
          content={encryptedText} 
          placeholder={'QwkclsiDkOievnsS ....'} 
          styles={'w-[310px] xs:w-[400px] sm:w-[450px] md:w-[670px] lg:w-[900px] h-64 border-4 border-red-300 font-alan font-bold placeholder:text-gray-300 mt-10 rounded-lg p-8 shadow-2xl outline-none'} 
        />
      </div>
    </div>
  )
}

export default App;
