'use strict';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('randBtn').addEventListener('click', () => {
        let tier = document.getElementById('tierSelect').value;
        let tierLevel = document.getElementById('tierLevelSelect').value;
        let nickname = document.getElementById('nicknameInput').value;
        let language = document.getElementById('koreanOnly').checked ? 'ko' : '';

        chrome.runtime.sendMessage({ tier: tier, nickname: nickname, tierLevel: tierLevel, language: language }, (response) => {});
    })
})