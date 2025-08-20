import { RefObject, useEffect, useRef } from 'react';

type Event = MouseEvent | TouchEvent;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) {
  const handlerRef = useRef(handler);
  
  // Always use the latest handler
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event?.target as Node)) {
        return;
      }
      handlerRef.current(event);
    };

    // Use capture phase to catch events before they bubble up
    const options = { capture: true };
    
    // Add event listeners with a small delay to avoid capturing the initial click
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', listener, options);
      document.addEventListener('touchstart', listener, options);
    }, 10);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', listener, options);
      document.removeEventListener('touchstart', listener, options);
    };
  }, [ref]);
}
