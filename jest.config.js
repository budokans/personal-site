module.exports = {
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!<rootDir>/interfaces/**",
    "!<rootDir>/styles/**",
    "!<rootDir>/node_modules/**",
    "!<rootDir>/.next/**",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coverageReporters: ["html", "text"],
  moduleDirectories: ["node_modules", "utils"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
};
