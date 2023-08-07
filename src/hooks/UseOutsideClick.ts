import { RefObject, useEffect } from 'react';

type Handler = (event: Event) => void;

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: Handler,
  deps: Array<string | number | boolean | object> = []
): void {
  useEffect(() => {
    const handleClickOutside = (evt: Event): any => {
      evt.stopPropagation();
      if (ref.current) {
        callback(evt); // Do what you want to handle in the callback
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [ref, ...deps]);
}

export default useOutsideClick;
