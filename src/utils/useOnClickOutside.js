/*
On ClickoutSide Higher order component, to be used when you need to dismiss a modal or list
if the user clicks outside of its bounding box.
To Use: Import useOnClickOutside from this file and pass a ref and a function to it that represent
the Element to be dismissed and the State
*/
import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
