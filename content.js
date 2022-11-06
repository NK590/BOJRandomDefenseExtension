chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);

    // if (message === 'hello, world!') {
    //     url = "https://www.naver.com";
    //     window.open(url);
    // }
})