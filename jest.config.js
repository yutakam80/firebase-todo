// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleFileExtensions: [
    "ts",
    "js",
    "json"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json",
      "diagnostics": false
    }
  },
  "testEnvironment": "jest-environment-uint8array",
  testMatch: [
    "**/*.test.ts"
  ],
};
