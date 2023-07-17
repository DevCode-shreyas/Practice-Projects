let color = "red";

chrome.runtime.onInstalled.addListener(() => {
//   console.log("installed");
  chrome.storage.sync.set({ color });
});

