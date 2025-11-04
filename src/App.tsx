import './App.css';
import Textfield from './components/Textfield';
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
    <div className='h-screen w-full shadow-2xl rounded-4xl shadow-gray-200 bg-white'>
      <div className='flex justify-center'>
        <div className='font-replay text-5xl m-14 px-3 pt-2 items-center bg-green-200 outline-none'>
          E N C R Y P T O .
        </div>
      </div>
      <div className='p-5 flex flex-row justify-center'>
        <div className='flex flex-row font-alan relative'>
          <Textfield 
            value={inputText}
            handleOnChange={handleInputText}
            placeholder={'Enter text to encrypt...'}
            styles={'h-14 w-[700px] text-lg placeholder-gray-300 font-medium rounded-full p-5 shadow-gray-300 shadow-xl outline-none '}
          />
          <EncryptionButtons 
            handleClick={handleEncryption} 
          />
        </div>
      </div>
      {/* <EncryptedText value={encryptedText} /> */}
    </div>
  )
}

export default App;
