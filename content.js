chrome.extension.onMessage.addListener((problemIndex, sender, sendResponse) => {
    if (problemIndex != 0) {
        let url = `https://www.acmicpc.net/problem/${problemIndex}`;
        window.open(url);
    } else {
        alert('검색 결과가 없습니다.');
    }
})