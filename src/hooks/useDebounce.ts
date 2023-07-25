import { useEffect, useState } from "react";

const useDebounce = (inputValue: string, delay = 800) => {
  const [debounceValue, setDebounceValue] = useState<string>(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(inputValue), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return debounceValue;
};

export default useDebounce;
