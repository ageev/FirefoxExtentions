browser.contextMenus.create({
    id: "open-in-ZAM",
    title: "Send to ZAM",
    contexts: ["all"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-in-ZAM") {
        var myUrl = "http://127.0.0.1:5000/" + info.selectionText.toLowerCase();
        browser.tabs.create({ url: myUrl, active: false})
    }
});
