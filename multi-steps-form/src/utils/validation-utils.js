export const isEmpty = (value) => !value.trim();

export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isPhoneNumber = (phoneNumber) => /^\+?\d{8}$/.test(phoneNumber);

export const isOver18 = (dates) => {
  if (!dates) return false;

  const today = new Date();
  const birthDate = new Date(dates);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age >= 18;
};
