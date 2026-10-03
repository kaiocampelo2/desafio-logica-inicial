
// Task 02 - calculate a trip cost based on fuel type and distance

// Define the fuel prices
const gasPrice = 6.55;
const dieselPrice = 8.50;
const etanolPrice = 5.50;

// Define the trip parameters
const kmDist = 100;
const kmPerLitre = 10;
const gasType = 'Etanol';

// Calculate the total fuel needed for the trip
const gasTotalTravel = kmDist / kmPerLitre;

// Calculate the total cost based on the fuel type
if (gasType === 'Etanol') {
    const totalCost = gasTotalTravel * etanolPrice; // Calculate total cost for Etanol
    console.log(totalCost.toFixed(2));
}else if (gasType === 'Gasolina') {
    const totalCost = gasTotalTravel * gasPrice; // Calculate total cost for Gasolina
    console.log(totalCost.toFixed(2));
}else {
    const totalCost = gasTotalTravel * dieselPrice; // Calculate total cost for Diesel
    console.log(totalCost.toFixed(2)); 
}

