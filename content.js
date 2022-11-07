chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "no match problems") {
        alert("검색 결과가 없습니다.");
    }
})