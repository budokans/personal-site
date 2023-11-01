import "@testing-library/jest-dom";
import "mock-match-media/jest-setup"

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))