chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    
    url = 'https://solved.ac/api/v3/search/problem?query=*g5..g1+-solved_by:dslr';
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // 해당 api response는 50개씩 잘려서 받아짐
        console.log(data);
        console.log(data.items.length)
        console.log(JSON.stringify(data));
    })
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, message);
    })

    /**
     * solved.ac api
     * 
     * ex) https://solved.ac/api/v3/search/problem?query=tier:*g5..g1+-solved_by:dslr
     * 
     *  */
})