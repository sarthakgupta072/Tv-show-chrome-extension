const text = []

const aTags = document.getElementsByTagName("a")
for (const tag of aTags) {
    text.push(tag.textContent)
}

chrome.storage.local.set({
    text,
})

// Sends message to all of background scripts and popups
chrome.runtime.sendMessage(null, text, (response) => {
    console.log("I am from the send response function: " + response)
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)
}) 