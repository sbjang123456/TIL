const script = document.createElement('script');
script.src = chrome.runtime.getURL('assets/index.js');
document.head.appendChild(script);


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('request ::: ', request, sendResponse());
    if (request.source === 'my-chrome-extension') {
      window.postMessage(
        {
          source: 'my-chrome-extension',
          data: request.data,
        },
        '*'
      );
    } else if (request.source === 'my-nextjs-app') {
      window.postMessage(
        {
          source: 'my-nextjs-app',
          data: `custom ::::: ${request.data}`,
        },
        '*'
      );
    } else if (request.source === 'post-app') {
      window.postMessage(
        {
          source: 'post-app',
          data: `custom ::::: ${request.data}`,
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

// Content Script
// chrome.tabs.sendMessage({
//   message: 'Hello from Content Script!'
// }, function(response) {
//   console.log('Received response from Service Worker:', response);
// });
