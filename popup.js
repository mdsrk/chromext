document.addEventListener('DOMContentLoaded', function() {
    fetchTime();
});

function fetchTime() {
    chrome.runtime.sendMessage({message: "getTime"}, function(response) {
        displayTime(response);
    });
}

function displayTime(timeData) {
    document.getElementById('timeIndia').textContent = timeData.timeIndia;
    document.getElementById('timeIsrael').textContent = timeData.timeIsrael;
    document.getElementById('timeUSA').textContent = timeData.timeUSA;
    document.getElementById('timeUTC').textContent = timeData.timeUTC;
    document.getElementById('timeAustralia').textContent = timeData.timeAustralia;
    document.getElementById('timeSingapore').textContent = timeData.timeSingapore;
}