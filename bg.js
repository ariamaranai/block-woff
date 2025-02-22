chrome.declarativeNetRequest.getEnabledRulesets(rulesetIds =>
  chrome.action.setIcon({ path: rulesetIds.length ? "on.png" : "off.png" })
);
chrome.action.onClicked.addListener(() =>
  chrome.declarativeNetRequest.getEnabledRulesets(rulesetIds => {
    chrome.declarativeNetRequest.updateEnabledRulesets(
      rulesetIds.length
        ? (
          chrome.action.setIcon({ path: "off.png" }),
          { disableRulesetIds : ["0"] }
        )
        : (
          chrome.action.setIcon({ path: "on.png" }),
          { enableRulesetIds : ["0"] }
        )
    )
  })
);