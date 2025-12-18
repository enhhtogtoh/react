import { isEmpty, isEmail, isPhoneNumber, isOver18 } from "./validation-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Овог нэр оруулна уу.";
  }
  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Өөрийн нэрээ оруулна уу.";
  }

  if (isEmpty(formValues.username)) {
    errors.username = "Хэрэглэгчийн нэрээ оруулна уу.";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  if (!isEmpty(formValues.email)) {
    if (!isEmail(formValues.email)) {
      errors.email = "Зөв мэйл хаяг оруулна уу.";
    }
  } else {
    errors.email = "Мэйл хаягаа оруулна уу.";
  }
  if (!isEmpty(formValues.phoneNumber)) {
    if (!isPhoneNumber(formValues.phoneNumber)) {
      errors.phoneNumber = "8 оронтой дугаар оруулна уу.";
    }
  } else {
    errors.phoneNumber = "Утасны дугаараа оруулна уу.";
  }
  if (!isEmpty(formValues.password)) {
    if (formValues.password.length < 8) {
      errors.password = "8 оронтой тоо оруулна уу";
    }
  } else {
    errors.password = "Нууц үгээ оруулна уу.";
  }
  if (!isEmpty(formValues.confirmPassword)) {
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
    }
  } else {
    errors.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepThree = (formValues) => {
  const errors = {};

  if (!isEmpty(formValues.dateOfBirth)) {
    if (!isOver18(formValues.dateOfBirth)) {
      errors.dateOfBirth = "Та 18 ба түүнээс дээш настай байх ёстой.";
    }
  } else {
    errors.dateOfBirth = "Төрсөн өдрөө оруулна уу.";
  }
  if (isEmpty(formValues.profile)) {
    errors.profile = "Профайл зурагаа оруулна уу.";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};
