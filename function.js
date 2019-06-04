var empObj = JSON.parse(global.character);

empObj.name.forEach((item) => {
  Object.entries(item).forEach(([key, val]) => {
    console.log(`key-${key}-val-${JSON.stringify(val)}`)
  });
});