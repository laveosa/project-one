class LocalStorageService {
  static setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage item: ${error}`);
    }
  }

  static getItem<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);

      if (value === null) {
        return null;
      }

      return JSON.parse(value) as T;
    } catch (error) {
      console.error(`Error getting localStorage item: ${error}`);
      return null;
    }
  }

  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage item: ${error}`);
    }
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Error clearing localStorage: ${error}`);
    }
  }

  static containsKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  static getKeys(): string[] {
    return Object.keys(localStorage);
  }

  static getLength(): number {
    return localStorage.length;
  }
}

export default LocalStorageService;
