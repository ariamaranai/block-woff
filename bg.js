chrome.action.onClicked.addListener(a =>
  chrome.declarativeNetRequest.getEnabledRulesets(rulesetIds => {
    chrome.declarativeNetRequest.updateEnabledRulesets(
      rulesetIds.length
        ? (
          chrome.action.setIcon({ path: a ? "off.png" : "on.png" }),
          { [a ? "disableRulesetIds" : "enableRulesetIds"] : ["0"] }
        )
        : (
          chrome.action.setIcon({ path: a ? "on.png" : "off.png" }),
          { [a ? "enableRulesetIds": "disableRulesetIds"] : ["0"] }
        )
    )
  })
);
chrome.action.onClicked.dispatch();