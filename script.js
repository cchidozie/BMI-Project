const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    //NaN !== NaN
    results.innerHTML = "Biko write something wey make sense";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Biko write something wey make sense";
  } else {
    //calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //display the results
    if (`${bmi}` < 18.6) {
      results.innerHTML = `<span>${bmi}</span>` + " You are under weight.";
    } else if (`${bmi}` > 18.6 && `${bmi}` < 24.9) {
      results.innerHTML =
        `<span>${bmi}</span>` + " Keeping it normal ain't we?";
    } else {
      results.innerHTML = `<span>${bmi}</span>` + " You are overweight.";
    }
  }
});
