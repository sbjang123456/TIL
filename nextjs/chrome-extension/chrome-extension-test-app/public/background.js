
let savedMessage = '';

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.source === 'my-nextjs-app') {
//       chrome.runtime.sendMessage({
//         source: 'my-nextjs-app',
//         data: request.data,
//       }, () => {
//         console.log(request);
//         if (chrome.runtime.lastError) {
//             console.log(
//                 'Error while sending message to the extension:',
//                 chrome.runtime.lastError.message
//             );
//         }
//       });
//     }
//   });
  
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.source === 'my-nextjs-app') {
        savedMessage = request.data;
    }
});
  
chrome.runtime.onConnect.addListener((port) => {
    port.postMessage({ data: savedMessage });
});