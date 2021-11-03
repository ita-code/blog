//获取
export const loalStorageGet = (key) => {
  if (!key) return;
  return window.localStorage.getItem(key);
};
//存储
export const loalStorageSet = (key, value) => {
  if (!key) return;
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};

