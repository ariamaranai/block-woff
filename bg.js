chrome.action.onClicked.addListener(async () => {
  let len = (await chrome.declarativeNetRequest.getEnabledRulesets()).length;
  chrome.action.setIcon({
    path: len ? "off.png": "on.png"
  });
  chrome.declarativeNetRequest.updateEnabledRulesets({
    [len ? "disableRulesetIds" : "enableRulesetIds"] : ["0"]
  });
});
{
  let isCalled;
  chrome.runtime.onStartup.addListener(async () =>
    isCalled ??= chrome.action.setIcon({
      path: (await chrome.declarativeNetRequest.getEnabledRulesets()).length ? "on.png" : "off.png"
    })
  );
}
chrome.runtime.onStartup.dispatch();