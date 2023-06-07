chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        "title": "Test Context Menu",
        "id": "contextMenu1",
        "contexts": ["page", "selection"]
    })

    chrome.contextMenus.onClicked.addListener((event) => {
        console.log(event)
    })

    chrome.contextMenus.create({
        "title": "Test Context Menu 2",
        "id": "contextMenu2",
        "contexts": ["page", "selection"],
        "parentId": "contextMenu1"
    })

    chrome.contextMenus.create({
        "title": "Test Context Menu 3",
        "id": "contextMenu3",
        "contexts": ["page", "selection"],
        "parentId": "contextMenu1"
    })

    

})

console.log("Background script running")