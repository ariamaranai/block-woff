(async () => {
  await chrome.action.setIcon({ path:
    (await chrome.declarativeNetRequest.getEnabledRulesets()).length ? "on.png" : "off.png"
  });
  chrome.action.onClicked.addListener(async () => {
    let len = (await chrome.declarativeNetRequest.getEnabledRulesets()).length;
    await chrome.action.setIcon({ path: len ? "off.png": "on.png" }),
    await chrome.declarativeNetRequest.updateEnabledRulesets({
      [len ? "disableRulesetIds" : "enableRulesetIds"] : ["0"]
    });
  });
})()