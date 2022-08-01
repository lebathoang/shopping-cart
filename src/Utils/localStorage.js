export function get(key, defaultValue) {
  const localGetItem = localStorage.getItem(key);
  if (localGetItem) {
    try {
      return JSON.parse(localGetItem);
    } catch (error) {
      return localGetItem;
    }
  } else {
    return defaultValue;
  }
}

export function set(key, value) {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return localStorage.setItem(key, value);
  }
}

export function remove(key) {
  return localStorage.removeItem(key);
}

export function clear() {
  return localStorage.clear();
}

const localStorageUltil = { get, set, remove, clear };

export default localStorageUltil;
