
const { calculateIncome } = require('./util');






const initApp = () => {
  // Initializes the app, registers the button click listener
  console.log("app init");
  const newUserButton = document.querySelector('#calculateTax');
  newUserButton.addEventListener('click', calculateIncome);
  return 0;
};



// Start the app!
initApp();
