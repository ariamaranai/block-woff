{
  let isDisable = 0;
  chrome.action.onClicked.addListener(() =>
    chrome.declarativeNetRequest.updateEnabledRulesets(
      (isDisable = !isDisable)
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
}