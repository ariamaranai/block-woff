chrome.declarativeNetRequest.getEnabledRulesets(rulesetIds => {
  let isEnabled = rulesetIds.length;
  chrome.action.onClicked.addListener(() =>
    chrome.declarativeNetRequest.updateEnabledRulesets(
      (isEnabled = !isEnabled)
        ? (
          chrome.action.setIcon({ path: "on.png" }),
          { enableRulesetIds: ["0"] }
        )
        : (
          chrome.action.setIcon({ path: "off.png" }),
          { disableRulesetIds: ["0"] }
        )
    )
  );
});