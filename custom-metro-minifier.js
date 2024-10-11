module.exports = async (code, map, reserved, config) => {
  console.log("Minifier should be called, but isnt");

  // Return empty bundle to prove this isn't called
  return {
    code: "",
    map: [],
  };
};
