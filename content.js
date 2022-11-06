chrome.extension.onMessage.addListener((problemIndex, sender, sendResponse) => {
    console.log(problemIndex);

    url = `https://www.acmicpc.net/problem/${problemIndex}`;
    window.open(url);
})