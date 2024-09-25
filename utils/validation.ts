export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// at least 1 lower case, 1 upper case, 1 special char and 1 number
export const validatePassword = (password: string): boolean => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-#])[A-Za-z\d@$!%*?&\-#]{8,}$/;
  return re.test(password);
};
