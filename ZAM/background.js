/* to work with storage you need to be async */
async function getSettings() {
        let value = await browser.storage.local.get();
        Settings = value["ZAMsettings"];
        return Settings;
    }

function setMenu(titlename) {
	browser.contextMenus.create({
   		id: "open-in-ZAM",
   		title: titlename,
   		contexts: ["selection"],
	});
}

function removeMenu() {
	browser.contextMenus.remove("open-in-ZAM");
}

function openURL(info) {
	let myUrl = Settings.prefix + info.selectionText.toLowerCase().trim() + Settings.postfix;
    browser.tabs.create({ url: myUrl, active: false});
}

/* initialise menu item for the 1st time */
/* this construction should be used to get real value instead of Promises. Thank you, StackOverflow! */
getSettings().then(x => { 
	setMenu(x.actionname);
})

/* update context menu on options change */
browser.storage.onChanged.addListener(function(info, tab) {
	getSettings().then(x => {
		removeMenu();
		setMenu(x.actionname);
	})
});

/* if clicked open URL */
browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "open-in-ZAM") {
        openURL(info);
    }
});