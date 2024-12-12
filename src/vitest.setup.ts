/// <reference types="vitest" />

import "@testing-library/jest-dom";

globalThis.matchMedia = (query: string): MediaQueryList => ({
  matches: query === "(min-width: 768px)", // Mock behavior based on the query
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
});

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
