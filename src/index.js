import {useState, useEffect} from 'react'

export function useGrowl(timeout = 5000) {
  // state of the growl
  const [growlActive, setGrowlActive] = useState(false);

  useEffect(() => {
    if (growlActive) {
      const timeoutId = setTimeout(() => {
        setGrowlActive(false);
      }, timeout);

      return () => clearTimeout(timeoutId);
    }
    // eslint-disable-next-line
  }, [growlActive, timeout]);

  return [growlActive, setGrowlActive];
}