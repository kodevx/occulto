import './App.css';
import useApp from './customHooks/App/useApp';
import Textfield from './components/Textfield';

function App() {

  const { inputText } = useApp();

  return (
    <>
      <div className='font-replay text-5xl'>E N C R Y P T O</div>
      <Textfield value={inputText} />
      {/* <EncryptedText value={encryptedText} /> */}
    </>
  )
}

export default App
