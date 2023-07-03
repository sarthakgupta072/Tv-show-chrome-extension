chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.set({
        shows: [],
    })
    chrome.contextMenus.create({
        "title": "Search TV Show",
        "id": "contextMenu1",
        "contexts": ["page", "selection"]
    })

    chrome.contextMenus.onClicked.addListener((event) => {
        fetch(`https://api.tvmaze.com/search/shows?q=${event.selectionText}}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                chrome.storage.local.set({
                    shows: data
                })
            })
        // chrome.tabs.create({
        //     url: `https://www.imdb.com/find/?q=${event.selectionText}`
        // })
    })
})

chrome.runtime.onMessage.addListener((msg, sender, senderResponse) => {
    console.log(msg)
    console.log(sender)
    senderResponse("received message from background")
    // To send message to contentScript
    chrome.tabs.sendMessage(sender.tab.id, "Got your message from background!")
})

