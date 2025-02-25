chrome.declarativeNetRequest.getEnabledRulesets(rulesetIds => {
  chrome.action.setIcon({ path: rulesetIds.length ? "on.png" : "off.png" });
});
chrome.action.onClicked.addListener(async () => {
  let len = (await chrome.declarativeNetRequest.getEnabledRulesets()).length;
  chrome.action.setIcon({ path: len ? "off.png": "on.png" }),
  chrome.declarativeNetRequest.updateEnabledRulesets({
    [len ? "disableRulesetIds" : "enableRulesetIds"] : ["0"]
  });
});