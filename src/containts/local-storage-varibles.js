// set item to local storage
export const setEmailToLocalStorage = (email) => {
  localStorage.setItem('email', email);
};
export const setUserIdToLocalStorage = (userId) => {
  localStorage.setItem('userId', userId);
};
export const setTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

// get item from local storage

export const getEmailFromLocalStorage = () => {
  return localStorage.getItem('email');
};
export const getUserIdFromLocalStorage = () => {
  return localStorage.getItem('userId');
};
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

// remove item from local storage

export const ClearEmailFromLocalStorage = () => {
  localStorage.removeItem('email');
};
export const ClearUserIdFromLocalStorage = () => {
  localStorage.removeItem('userId');
};
export const ClearTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
};
