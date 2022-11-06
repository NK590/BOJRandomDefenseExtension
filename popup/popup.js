'use strict';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('randBtn').addEventListener('click', () => {
        request = {
            tier : document.getElementById('tierSelect').value,
            nickname : document.getElementById('nicknameInput').value
        };
        alert(request);

        chrome.runtime.sendMessage(request);
    })
})