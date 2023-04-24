const selectedCity = document.querySelector(".step_two .selected");
const optionsCitiesContainer = document.querySelector(
  ".step_two .options__container"
);
const optionsCitiesList = [...document.querySelectorAll(".step_two .option")];

selectedCity.addEventListener("click", () => {
  optionsCitiesContainer.classList.toggle("active");
});

optionsCitiesList.forEach((option) => {
  option.addEventListener("click", () => {
    selectedCity.innerText = option.querySelector("span").innerText;
    optionsCitiesContainer.classList.remove("active");
  });
});

// ---------------------------------------------------------------------------------------\

const selecteCours = document.querySelector(".step_seven .selected");
const optionsCoursContainer = document.querySelector(
  ".step_seven .options__container"
);
const optionsCoursList = [...document.querySelectorAll(".step_seven .option")];

selecteCours.addEventListener("click", () => {
  optionsCoursContainer.classList.toggle("active");
});

optionsCoursList.forEach((option) => {
  option.addEventListener("click", () => {
    selecteCours.innerText = option.querySelector("span").innerText;
    optionsCoursContainer.classList.remove("active");
  });
});

// -------------------------------------------------------------------------------------------------
const stepFormWrapper = document.querySelector("[data-step-form]");
const formSteps = [...stepFormWrapper.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  formSteps[currentStep].classList.add("active");
}

stepFormWrapper.addEventListener("click", (e) => {
  let increment;

  if (e.target.matches("[data-next]")) {
    increment = 1;
  } else if (e.target.matches("[data-prev]")) {
    increment = -1;
  }

  if (increment == null) return;

  const inputs = [...formSteps[currentStep].querySelectorAll("input")];

  const isValid = inputs.every((input) => input.checkValidity());

  if (isValid) {
    currentStep += increment;
    showCurrentStep();
  }

  if (currentStep == formSteps.length - 1) {
    setTimeout(() => {
      currentStep = 0;
      showCurrentStep();
    }, 5000);
  }
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index == currentStep);
  });
}

stepFormWrapper.addEventListener("submit", (e) => {
  e.preventDefault();
});
