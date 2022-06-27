const { defaults } = require("jest-config");
module.exports = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
    testEnvironment: "jsdom",
    transform: {
      "\\.[jt]sx?$": "babel-jest",
    }
};
