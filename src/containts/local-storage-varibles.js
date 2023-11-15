// set item to local storage
export const setEmailToLocalStorage = (email) => {
  localStorage.setItem('email', email);
};
export const setPasswordToLocalStorage = (password) => {
  localStorage.setItem('password', password);
}
export const setUserIdToLocalStorage = (userId) => {
  localStorage.setItem('userId', userId);
};
export const setTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
};
export const setAvailableAccountToLocalStorage= (available) => {
  localStorage.setItem('available', available);
}

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
export const getAvailableAccountFromLocalStorage = () => {
  return localStorage.getItem('available');
}

// remove item from local storage

export const ClearEmailFromLocalStorage = () => {
  localStorage.removeItem('email');
};
export const ClearPasswordFromLocalStorage = () => {
  localStorage.removeItem('password');
}
export const ClearUserIdFromLocalStorage = () => {
  localStorage.removeItem('userId');
};
export const ClearTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
};
export const ClearAvailableFromLocalStorage = () => {
  localStorage.removeItem('available');
}
