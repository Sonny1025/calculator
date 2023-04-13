const calculator = document.querySelector(".calculator");
const result = document.querySelector(".result");

calculator.addEventListener("click", e => {
  const key = e.target;
  const keyValue = key.value;
  const keyType = key.type;
  const resultValue = result.value;
  
  if (keyType === "number") {
    result.value = resultValue + keyValue;
  } else if (keyType === "operator") {
    const lastChar = resultValue.slice(-1);
    if (resultValue !== "" && lastChar !== "+" && lastChar !== "-" && lastChar !== "*" && lastChar !== "/") {
      result.value = resultValue +
