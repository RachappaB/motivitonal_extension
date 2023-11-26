chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    const backgroundImage = currentTab.image || "default.jpg";
    document.body.style.backgroundImage = `url('${backgroundImage}')`;
  });
  