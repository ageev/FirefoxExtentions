browser.contextMenus.create({
   	id: "open-VT",
   	title: "Check on VirusTotal",
   	contexts: ["selection"],
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "open-VT") {
        var VT_Url = "https://www.virustotal.com/gui/file/" + info.selectionText.toLowerCase().trim() + "/details";
        browser.tabs.create({ url: VT_Url, active: false});
    } 
});