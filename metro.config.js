const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer.minifierPath = require.resolve("./custom-metro-minifier");

module.exports = config;
