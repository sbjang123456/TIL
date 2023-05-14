import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [receivedMessage, setReceivedMessage] = useState('');

  const sendMessage = () => {
    const curr = count + 1;
    setCount(curr)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id as number, {
        source: 'my-chrome-extension',
        data: curr,
      });
    });
  };

  // useEffect(() => {
  //   const handleMessage = (request: any) => {
  //     if (request.source === 'my-nextjs-app') {
  //       setReceivedMessage(request.data);
  //     }
  //   };

  //   chrome.runtime.onMessage.addListener(handleMessage);

  //   return () => {
  //     chrome.runtime.onMessage.removeListener(handleMessage);
  //   };
  // }, []);

  useEffect(() => {
    const port = chrome.runtime.connect({ name: 'popup' });

    port.onMessage.addListener((msg) => {
      setReceivedMessage(msg.data);
    });

    return () => {
      port.disconnect();
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={sendMessage}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{receivedMessage || 'No message received yet.'}</p>
    </>
  )
}

export default App
