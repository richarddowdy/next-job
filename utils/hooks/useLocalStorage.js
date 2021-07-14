import { useState, useEffect } from "react";
import { WINDOW_GLOBAL } from "../../pages/_app";

function useLocalStorage(key, firstValue = null) {
  const initialValue = WINDOW_GLOBAL.localStorage?.getItem(key) || firstValue;

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    if (!item) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;
