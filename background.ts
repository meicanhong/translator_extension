chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === "check") checkGlobalOrCurrent(sendResponse);
  else if (message.type === "fetch") fich(sendResponse, message.url);
  else if (message.type === "toggleGlobal") toggleGlobal(sendResponse);
  else if (message.type === "ui") ui(sendResponse);
  return true;
});

function checkGlobalOrCurrent(func: Function) {
  chrome.tabs.query({ active: true }, (tabs) => {
    const domain = new URL(tabs[0].url!).hostname;
    chrome.storage.sync.get(["globalSwitch", domain], (data) => {
      let res = false;
      if (data.globalSwitch || data[domain]) res = true;
      func(res);
    });
  });
}

function fich(func: Function, url: string) {
  fetch(url)
    .then((r) => r.text())
    .then((html) => func(html));
}

function toggleCurrent(func: Function) {
  chrome.tabs.query({ active: true }, (tabs) => {
    const domain = new URL(tabs[0].url!).hostname;
    chrome.storage.sync.get(domain, (data) => {
      data[domain] = !data[domain];
      chrome.storage.sync.set(data);
      func(data[domain]);
    });
  });
}

function toggleGlobal(func: Function) {
  chrome.storage.sync.get("globalSwitch", (data) => {
    data["globalSwitch"] = !data["globalSwitch"];
    chrome.storage.sync.set(data);
    func(data["globalSwitch"]);
  });
}

function ui(func: Function) {
  chrome.storage.sync.get("UISwitch", (data) => {
    let res = false;
    if (data.UISwitch) res = true;
    func(res);
  });
}
