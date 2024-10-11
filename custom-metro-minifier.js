module.exports = async (code, map, reserved, config) => {
  console.log("custom-metro-minifier.js is called");

  // Return empty bundle to prove this isn't called when hermes is enabled
  // When switching to jsc, this will be called and the app fails to load with an error (as expected)
  return {
    code: "",
    map: [],
  };
};
