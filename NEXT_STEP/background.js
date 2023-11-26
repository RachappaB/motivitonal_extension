chrome.tabs.onCreated.addListener(function (tab) {
    chrome.storage.local.get("photos", function (result) {
      const photos = result.photos || [];
      if (photos.length > 0) {
        const randomIndex = Math.floor(Math.random() * photos.length);
        const randomPhoto = photos[randomIndex];
        chrome.tabs.update(tab.id, { "image": randomPhoto });
      }
    });
  });
  

  chrome.runtime.onInstalled.addListener(function () {
    const photos = [];
    for (let i = 1; i <= 10; i++) {
      photos.push(`photos/photo${i}.jpg`);
    }
    chrome.storage.local.set({ "photos": photos });
  });
  