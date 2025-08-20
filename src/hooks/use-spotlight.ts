"use client";

import { useState, useEffect, useCallback } from 'react';

type UseSpotlightReturn = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export function useSpotlight(): UseSpotlightReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!mounted) return;
    
    const down = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      const isKKey = e.key.toLowerCase() === 'k';
      const isMetaKey = e.metaKey || e.ctrlKey;
      
      // Handle Cmd+K or Ctrl+K in any context
      if (isMetaKey && isKKey) {
        e.preventDefault();
        setIsOpen(prev => !prev);
        return;
      }
      
      // Handle Escape key when open
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, [isOpen, mounted]);

  // State management
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen: isOpen && mounted,
    open,
    close,
    toggle,
  } as const;
}
