const script = document.createElement('script');
script.src = chrome.runtime.getURL('assets/index.js');
document.head.appendChild(script);


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.source === 'my-chrome-extension') {
      window.postMessage(
        {
          source: 'my-chrome-extension',
          data: request.data,
        },
        '*'
      );
    }
  });
  
//   window.addEventListener('message', (event) => {
//     if (event.source !== window) return;
//     if (event.data.source && event.data.source === 'my-nextjs-app') {
//       chrome.runtime.sendMessage({
//         source: 'my-nextjs-app',
//         data: event.data.data,
//       });
//     }
//   });
  

  const handleMessage = (event) => {
    if (event.source !== window) return;
    if (event.data.source && event.data.source === 'my-nextjs-app') {
      chrome.runtime.sendMessage({
        source: 'my-nextjs-app',
        data: event.data.data,
      });
    }
  };
  
  window.addEventListener('message', handleMessage);
  
  // 페이지를 벗어날 때 이벤트 리스너를 제거합니다.
//   window.addEventListener('beforeunload', () => {
//     window.removeEventListener('message', handleMessage);
//   });
  
// window.addEventListener('my-nextjs-app-event', (event) => {
//     console.log(event, 'event', ';;;;')
//     chrome.runtime.sendMessage({
//       source: 'my-nextjs-app',
//       data: event.detail,
//     });
//   });