
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
        savedMessage = `popup ::: ${request.data}`;
        // sendResponse({
        //     source: 'post-app',
        //     status: 'success',
        //     data: `custom : ${request.data}`
        // });
        // window.postMessage(
        //     {
        //       source: 'post-app',
        //       data: `custom : ${request.data}`,
        //     },
        //     '*'
        // );
        // chrome.runtime.sendMessage("post-app", {message: `custom : ${request.data}`,})
        chrome.tabs.query({ active: true, currentWindow: true }, (pages) => {
            chrome.tabs.sendMessage(pages[0].id, { source: "post-app", data: `custom : ${request.data}` });
        });
        // sendResponse({
        //     status: 'success',
        //     data: `sendResponse : ${request.data}`
        // })

    }
});
  
chrome.runtime.onConnect.addListener((port) => {
    port.postMessage({ data: savedMessage });
});
