'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('test1').addEventListener('click', () => {
        chrome.runtime.sendMessage("hello, world!");
    })
})