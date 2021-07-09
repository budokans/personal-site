module.exports = {
  collectCoverageFrom: [
    "<rootDir>/components/feature/**",
    "<rootDir>/components/home/**",
    "<rootDir>/containers/**",
    "<rootDir>/hooks/**",
    "<rootDir>/lib/getBottomRowCount",
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
