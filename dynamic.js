function selectOption(optionId) {
  const containers = document.querySelectorAll(".option-container");
  containers.forEach((container) => {
    container.classList.remove("selected");
  });

  const selectedContainer = document.getElementById(optionId);
  selectedContainer.classList.add("selected");

  const priceMap = {
    option1: "$10.00 USD",
    option2: "$18.00 USD",
    option3: "$24.00 USD",
  };

  document.getElementById("total").innerText = priceMap[optionId];
}
