chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        "title": "Test Context Menu",
        "id": "contextMenu1",
        "contexts": ["page", "selection"]
    })

    chrome.contextMenus.onClicked.addListener((event) => {
        console.log(event)
        chrome.tabs.create({
            url: `https://www.imdb.com/find/?q=${event.selectionText}`
        })
    })
})

chrome.runtime.onMessage.addListener((msg, sender, senderResponse) => {
    console.log(msg)
    console.log(sender)
    senderResponse("received message from background")
    // To send message to contentScript
    chrome.tabs.sendMessage(sender.tab.id, "Got your message from background!")
})

