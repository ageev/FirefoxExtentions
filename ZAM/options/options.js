const prefixInput = document.querySelector("#prefix");
const postfixInput = document.querySelector("#postfix");
const actionnameInput = document.querySelector("#actionname");

/*
Store the currently selected settings using browser.storage.local.
*/
function storeSettings() {
  browser.storage.local.set({
    ZAMsettings: {
      prefix: prefixInput.value,
      postfix: postfixInput.value,
      actionname: actionnameInput.value
    }
  });
}

/*
Update the options UI with the settings values retrieved from storage,
or the default settings if the stored settings are empty.
*/
function updateUI(restoredSettings) {
  prefixInput.value = restoredSettings.ZAMsettings.prefix || "";
  postfixInput.value = restoredSettings.ZAMsettings.postfix || "";
  actionnameInput.value = restoredSettings.ZAMsettings.actionname || "";
}

function onError(e) {
  console.error(e);
}

/*
On opening the options page, fetch stored settings and update the UI with them.
*/
const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

/*
On blur, save the currently selected settings.
*/
prefixInput.addEventListener("blur", storeSettings);
postfixInput.addEventListener("blur", storeSettings);
actionnameInput.addEventListener("blur", storeSettings);