'use strict';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('typeOfSite').onchange = () => {
        let typeOfSite = document.getElementById('typeOfSite').value;
        if (typeOfSite == 'baekjoon') {
            document.getElementById('baekjoonDiv').style.display = 'block';
            document.getElementById('programmersDiv').style.display = 'none';
        } else {
            document.getElementById('baekjoonDiv').style.display = 'none';
            document.getElementById('programmersDiv').style.display = 'block';
        }
    }

    document.getElementById('randBtn').addEventListener('click', () => {
        let tier = document.getElementById('tierSelect').value;
        let tierLevel = document.getElementById('tierLevelSelect').value;
        let nickname = document.getElementById('nicknameInput').value;
        let language = document.getElementById('koreanOnly').checked ? 'ko' : '';
        let typeOfSite = document.getElementById('typeOfSite').value;
        let programmersLevel = document.getElementById('programmersLevelSelect').value;

        chrome.runtime.sendMessage({ 
            tier: tier, 
            nickname: nickname, 
            tierLevel: tierLevel, 
            language: language, 
            typeOfSite: typeOfSite,
            programmersLevel: programmersLevel
        }, (response) => {});
    })
})