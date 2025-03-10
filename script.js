document.getElementById('predict-btn').addEventListener('click', function() {
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const bathrooms = parseInt(document.getElementById('bathrooms').value);
    const sqft = parseInt(document.getElementById('sqft').value);
    const location = document.getElementById('location').value;
    const age = parseInt(document.getElementById('age').value);

    // Check if any of the input fields are empty or not valid numbers
   if (isNaN(bedrooms) || isNaN(bathrooms) || isNaN(sqft) || isNaN(age)) {
        alert('Please fill in all the fields.');
        return;
    }

    // Check if location is selected
    if (location === "") {
        alert('Please select a location.');
        return;
    }
    

    // Perform house price prediction (dummy value for demonstration)
    const pricePerBedroom = 20000;
    const pricePerBathroom = 10000;
    const pricePerSqft = 100;
    const priceAdjustmentBasedOnLocation = {
        Downtown: 50000,
        Suburb: 20000,
        Rural: 0,
        Uptown: 40000,
        Midtown: 30000,
        'Upper East Side': 70000,
        'Lower East Side': 45000,
        Whitefield: 30000,
        'Electronic City': 25000,
        Domlur: 35000,
        Rajajinagar: 32000,
        Sadashivanagar: 70000,
        Ulsoor: 40000
    };

    var predictedPrice = (bedrooms * pricePerBedroom) + (bathrooms * pricePerBathroom) + (sqft * pricePerSqft) - (age * 5000) + priceAdjustmentBasedOnLocation[location];


 // Convert predicted price to rupees
 predictedPrice = predictedPrice * 83.45;

 // Format the predicted price in rupees with commas
 var formattedPredictedPrice = predictedPrice.toLocaleString('en-IN');

 // Redirect to another webpage with the predicted price as a parameter in the URL
 window.location.href = `predictprice.html?predictedPrice=${formattedPredictedPrice}`;
});

 













































