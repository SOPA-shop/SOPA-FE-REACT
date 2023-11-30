import HTTP from '../../axios/axios-config.js';
import { getUserIdFromLocalStorage } from '../local-storage-varibles.js';


export const sendSubmitOTP = async ( OTP) => {

  return await HTTP.post ( '/verify-email', {
    userId: getUserIdFromLocalStorage (),
    otp: OTP,
  } )
};

export const registerUser = async (email,password) => {
  const response = await HTTP.post ( '/register', {
    email: email,
    password: password
  } )
  return response.userId
}

export const resetPassword = async (email) => {
  const response = await HTTP.post ( '/reset-password', {
    email: email
  })
  return response
}
export const updatePassword = async (password) => {
  const response = await HTTP.post ( '/update-password', {
    userId: getUserIdFromLocalStorage (),
    password: password
  })
  return response
}
export const changeEmail = async (email) => {
  const response = await HTTP.post ( '/change-email', {
    userId: getUserIdFromLocalStorage (),
    email: email
  })
  return response
}

export const SignIn = async (email,password) => {
  const response = await HTTP.post ( '/login', {
    email: email,
    password: password
  } )
  return response
}