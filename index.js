const calculateButton = document.querySelector("#calculate-button");
const lengthInput = document.querySelector("#length");
const widthInput = document.querySelector("#width");
const result = document.querySelector("#result");

calculateButton.addEventListener("click", function (event) {
  event.preventDefault();
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  result.innerHTML = length * width;
});
