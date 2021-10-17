export default class Store {
  static getItems() {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(null, (result) => {
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }
        resolve(result);
      });
    });
  }

  static postItem(key, value) {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.set({ [`${key}`]: value }),
        function (result) {
          resolve(result);
        };
    });
  }

  static removeItem(item) {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.remove([`${item}`], function (result) {
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }
        resolve(result);
      });
    });
  }
}
