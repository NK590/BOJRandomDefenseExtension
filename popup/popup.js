'use strict';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('randBtn').addEventListener('click', () => {
        let tier = document.getElementById('tierSelect').value;
        let nickname = document.getElementById('nicknameInput').value;

        chrome.runtime.sendMessage({ tier: tier, nickname: nickname }, (response) => {});
    })
})