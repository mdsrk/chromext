chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "getTime") {
      fetchTime(sendResponse);
      return true; // indicates that the response will be sent asynchronously
    }
  }
);

function fetchTime(sendResponse) {
  fetch('https://worldtimeapi.org/api/timezone')
    .then(response => response.json())
    .then(data => {
      const timeZones = {
        "timeIndia": data.find(zone => zone.includes('Asia/Kolkata')),
        "timeIsrael": data.find(zone => zone.includes('Asia/Jerusalem')),
        "timeUSA": data.find(zone => zone.includes('America/New_York')),
        "timeUTC": data.find(zone => zone.includes('Etc/UTC')),
        "timeAustralia": data.find(zone => zone.includes('Australia/Sydney')),
        "timeSingapore": data.find(zone => zone.includes('Asia/Singapore'))
      };
      sendResponse(timeZones);
    })
    .catch(error => console.error('Error:', error));
}