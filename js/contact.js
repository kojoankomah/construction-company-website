const quotationForm = document.querySelector("#quotationForm");
const formSuccess = document.querySelector("#formSuccess");
const serviceField = document.querySelector("#service");

function selectRequestedService() {
  if (!serviceField) {
    return;
  }

  const parameters = new URLSearchParams(window.location.search);
  const requestedService = parameters.get("service");

  if (!requestedService) {
    return;
  }

  const matchingOption = Array.from(serviceField.options).find(
    (option) => option.value === requestedService
  );

  if (matchingOption) {
    serviceField.value = requestedService;
  }
}

function showFieldError(field, message) {
  const formField = field.closest(".form-field");
  const errorMessage = document.querySelector(
    `#${field.id}Error`
  );

  formField?.classList.add("has-error");
  field.setAttribute("aria-invalid", "true");

  if (errorMessage) {
    errorMessage.textContent = message;
  }
}

function clearFieldError(field) {
  const formField = field.closest(".form-field");
  const errorMessage = document.querySelector(
    `#${field.id}Error`
  );

  formField?.classList.remove("has-error");
  field.removeAttribute("aria-invalid");

  if (errorMessage) {
    errorMessage.textContent = "";
  }
}

function validateFullName() {
  const field = document.querySelector("#fullName");

  if (field.value.trim().length < 2) {
    showFieldError(field, "Please enter your full name.");
    return false;
  }

  clearFieldError(field);
  return true;
}

function validateEmail() {
  const field = document.querySelector("#email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(field.value.trim())) {
    showFieldError(field, "Please enter a valid email address.");
    return false;
  }

  clearFieldError(field);
  return true;
}

function validateTelephone() {
  const field = document.querySelector("#telephone");
  const numberOfDigits = field.value.replace(/\D/g, "").length;

  if (numberOfDigits < 9) {
    showFieldError(field, "Please enter a valid telephone number.");
    return false;
  }

  clearFieldError(field);
  return true;
}

function validateProjectLocation() {
  const field = document.querySelector("#projectLocation");

  if (field.value.trim().length < 2) {
    showFieldError(field, "Please enter the project location.");
    return false;
  }

  clearFieldError(field);
  return true;
}

function validateService() {
  const field = document.querySelector("#service");

  if (!field.value) {
    showFieldError(field, "Please select the service you require.");
    return false;
  }

  clearFieldError(field);
  return true;
}

function validateProjectDetails() {
  const field = document.querySelector("#projectDetails");

  if (field.value.trim().length < 20) {
    showFieldError(
      field,
      "Please provide at least 20 characters about your project."
    );

    return false;
  }

  clearFieldError(field);
  return true;
}

const fieldValidators = [
  {
    field: document.querySelector("#fullName"),
    validate: validateFullName
  },
  {
    field: document.querySelector("#email"),
    validate: validateEmail
  },
  {
    field: document.querySelector("#telephone"),
    validate: validateTelephone
  },
  {
    field: document.querySelector("#projectLocation"),
    validate: validateProjectLocation
  },
  {
    field: document.querySelector("#service"),
    validate: validateService
  },
  {
    field: document.querySelector("#projectDetails"),
    validate: validateProjectDetails
  }
];

fieldValidators.forEach(({ field, validate }) => {
  if (!field) {
    return;
  }

  const eventName =
    field.tagName === "SELECT" ? "change" : "input";

  field.addEventListener(eventName, () => {
    if (field.hasAttribute("aria-invalid")) {
      validate();
    }

    if (formSuccess) {
      formSuccess.hidden = true;
    }
  });
});

quotationForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formSuccess) {
    formSuccess.hidden = true;
  }

  const validationResults = fieldValidators.map(
    ({ validate }) => validate()
  );

  const formIsValid = validationResults.every(
    (result) => result
  );

  if (!formIsValid) {
    const firstInvalidField = quotationForm.querySelector(
      '[aria-invalid="true"]'
    );

    firstInvalidField?.focus();
    return;
  }

  quotationForm.reset();
  selectRequestedService();

  if (formSuccess) {
    formSuccess.hidden = false;
    formSuccess.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
});

selectRequestedService();