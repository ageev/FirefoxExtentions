/*
Default settings. Initialize storage to these values.
*/
var ZAMsettings = {
  prefix: "http://127.0.0.1:5000/",
  postfix: "/details",
  actionname: "Send to ZAM"
}

/*
Generic error logger.
*/
function onError(e) {
  console.error(e);
}

/*
On startup, check whether we have stored settings.
If we don't, then store the default settings.
*/
function checkStoredSettings(storedSettings) {
  if (!storedSettings.ZAMsettings) {
    browser.storage.local.set({ZAMsettings});
  }
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);