import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ObservableElement } from '../types';

interface PlaygroundContextType {
  observedElements?: ObservableElement[];
}

const PlaygroundContext = createContext<PlaygroundContextType | undefined>(undefined);

const elements: ObservableElement[] = [
  {
    id: 'element-1',
    name: 'Element 1',
    isIntersecting: false,
    intersectionRatio: 0,
  },
  {
    id: 'element-2',
    name: 'Element 2',
    isIntersecting: false,
    intersectionRatio: 0,
  },
  {
    id: 'element-3',
    name: 'Element 3',
    isIntersecting: false,
    intersectionRatio: 0,
  },
  {
    id: 'element-4',
    name: 'Element 4',
    isIntersecting: false,
    intersectionRatio: 0,
  }
]

export const PlaygroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [observedElements, setObservedElements] = useState<typeof elements>(elements);

  const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setObservedElements((prev) => {
          const updates = new Map(entries.map(e => [e.target.id, e]));

          return prev.map((el) => {
            const entry = updates.get(el.id);
            if (entry) {
              return {
                ...el,
                isIntersecting: entry.isIntersecting,
                intersectionRatio: entry.intersectionRatio,
              };
            }
            return el;
          });
        });
      },
      { threshold: thresholds }
    );

    observedElements.forEach((el) => {
      const element = document.getElementById(el.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  const value = {
    observedElements
  };

  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export const usePlayground = () => {
  const context = useContext(PlaygroundContext);

  if (context === undefined) {
    throw new Error('usePlayground must be used within a PlaygroundProvider');
  }

  return context;
};