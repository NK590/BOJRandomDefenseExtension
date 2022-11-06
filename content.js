chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);

    url = `https://www.acmicpc.net/problem/${message}`;
    window.open(url);
})