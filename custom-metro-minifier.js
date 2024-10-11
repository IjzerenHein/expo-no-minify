module.exports = async (code, map, reserved, config) => {
  console.log("custom-metro-minifier.js is called");

  // Return empty bundle to prove this isn't called when hermes is enabled
  return {
    code: "",
    map: [],
  };
};
