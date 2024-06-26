import { useCallback, useEffect, useState } from 'react';
import { useEventCallback, useEventListener } from 'usehooks-ts';

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent;
  }
}

type UseLocalStorageOptions<T> = {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === 'undefined';

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  options: UseLocalStorageOptions<T> = {},
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const { initializeWithValue = true } = options;

  const serializer = useCallback(
    (value: T) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    },
    [options]
  );

  const deserializer = useCallback(
    (value: string) => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      if (value === 'undefined') {
        return undefined as unknown as T;
      }

      const defaultValue =
        initialValue instanceof Function ? initialValue() : initialValue;

      try {
        return JSON.parse(value) as T;
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return defaultValue;
      }
    },
    [options, initialValue]
  );

  const readValue = useCallback((): T => {
    const initialValueToUse =
      initialValue instanceof Function ? initialValue() : initialValue;

    if (IS_SERVER) {
      return initialValueToUse;
    }

    try {
      const raw = window.localStorage.getItem(key);
      return raw ? deserializer(raw) : initialValueToUse;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValueToUse;
    }
  }, [initialValue, key, deserializer]);

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (IS_SERVER) {
      return initialValue instanceof Function ? initialValue() : initialValue;
    } else if (initializeWithValue) {
      return readValue();
    } else {
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = useEventCallback((value) => {
    if (IS_SERVER) {
      console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
    }

    try {
      const newValue = value instanceof Function ? value(readValue()) : value;
      window.localStorage.setItem(key, serializer(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new StorageEvent('local-storage', { key }));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  });

  const removeValue = useEventCallback(() => {
    if (IS_SERVER) {
      console.warn(`Tried removing localStorage key “${key}” even though environment is not a client`);
    }

    const defaultValue =
      initialValue instanceof Function ? initialValue() : initialValue;

    window.localStorage.removeItem(key);
    setStoredValue(defaultValue);
    window.dispatchEvent(new StorageEvent('local-storage', { key }));
  });

  useEffect(() => {
    if (!IS_SERVER) {
      setStoredValue(readValue());
    }
  }, [key, readValue]);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ('key' in event && event.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );

  useEventListener('storage', handleStorageChange);
  useEventListener('local-storage', handleStorageChange);

  return [storedValue, setValue, removeValue];
}
