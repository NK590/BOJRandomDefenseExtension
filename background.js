chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    let typeOfSite = request.typeOfSite;

    if (typeOfSite == 'baekjoon') {
        let startTier = request.tier.charAt(0);
        let endTier = request.tier.charAt(0);
        let tierLevel = request.tierLevel;
        if (tierLevel != undefined && tierLevel != '') {
            startTier += tierLevel;
            endTier += tierLevel;
        } else {
            startTier += '5';
            endTier += '1';
        }
    
        let language = request.language;
        let langQuery = '';
        if (language != undefined && language != '') {
            langQuery = `+lang:${language}`;
        }
    
        let nickname = request.nickname;
        let url = `https://solved.ac/api/v3/search/problem?query=*${startTier}..${endTier}${langQuery}+-solved_by:${nickname}`;
        let problemIndex;
    
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.count >= 50) {
                let pageNum = parseInt(data.count / 50);
                if (data.count % 50 === 0) {
                    pageNum -= 1;
                }
    
                let page = Math.floor(Math.random() * pageNum) + 1;
                url = `https://solved.ac/api/v3/search/problem?query=*${startTier}..${endTier}${langQuery}+-solved_by:${nickname}&page=${page}`;
                
                fetch(url)
                .then((response2) => response2.json())
                .then((data2) => {
                    console.log(data2);
                    problemIndex = data2.items[Math.floor(Math.random() * data2.items.length)].problemId;
                    // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                    //     chrome.tabs.sendMessage(tabs[0].id, problemIndex, (response) => {});
                    // })
                    chrome.tabs.create({url:`https://www.acmicpc.net/problem/${problemIndex}`});
                })
            } else if (0 < data.count && data.count < 50) {
                problemIndex = data.items[Math.floor(Math.random() * data.items.length)].problemId;
                // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                //     chrome.tabs.sendMessage(tabs[0].id, problemIndex, (response) => {});
                // })
                chrome.tabs.create({url:`https://www.acmicpc.net/problem/${problemIndex}`});
            } else {
                chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                    chrome.tabs.sendMessage(tabs[0].id, "no match problems", (response) => {});
                })
            }
        })
    } else {
        let programmersLevel = request.programmersLevel;

        let url = `https://school.programmers.co.kr/api/v1/school/challenges/?levels[]=${programmersLevel}&statuses[]=unsolved`;
        let problemIndex;

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.totalEntries == 0) {
                chrome.tabs.sendMessage(tabs[0].id, "no match problems", (response) => {});
            } else {
                let totalPages = data.totalPages;
                let page = Math.floor(Math.random() * totalPages) + 1;
    
                url = `https://school.programmers.co.kr/api/v1/school/challenges/?levels[]=${programmersLevel}&statuses[]=unsolved&page=${page}`;
    
                fetch(url)
                .then((response2) => response2.json())
                .then((data2) => {
                    let problemNum = data2.result.length;
                    let problemRandomNum = Math.floor(Math.random() * problemNum);
                    let problemId = data2.result[problemRandomNum].id;
                    
                    chrome.tabs.create({url:`https://school.programmers.co.kr/learn/courses/30/lessons/${problemId}`});
                });
            }
        });
    }
})