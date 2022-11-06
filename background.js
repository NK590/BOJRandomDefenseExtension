chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);

    startTier =  request.tier.charAt(0) + '5';
    endTier = request.tier.charAt(0) + '1';
    nickname = request.nickname;
    url = `https://solved.ac/api/v3/search/problem?query=*${startTier}..${endTier}+-solved_by:${nickname}`;
    problemIndex = 1000;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // 해당 api response는 50개씩 잘려서 받아짐
        console.log(data);

        // if (data.count > 50) {
        //     pageNum = 
        // } else {
            problemIndex = data.items[Math.floor(Math.random() * data.items.length)].problemId;
        // }
        console.log(problemIndex);
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, problemIndex, (response) => {});
        })
    })
    

    /**
     * solved.ac api
     * 
     * ex) https://solved.ac/api/v3/search/problem?query=tier:*g5..g1+-solved_by:dslr
     * 
     *  */
})