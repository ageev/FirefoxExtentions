browser.contextMenus.create({
    id: "open-in-umbrella",
    title: "Search domain in Umbrella",
    contexts: ["all"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-in-umbrella") {
        var myUrl = "https://reports.api.umbrella.com/v1/organizations/<client_ID>/destinations/" + info.selectionText.toLowerCase() + "/activity?limit=100&offset=0";
        browser.tabs.create({ url: myUrl, active: false})
    }
});
