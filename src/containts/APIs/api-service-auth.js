import HTTP from '../../axios/axios-config.js';

export const sendSubmitOTP = async (userId, OTP) => {
  const response = await HTTP.post('/auth/verify-email', {
    userId: userId,
    OTP: OTP,
  });

  if (response.status === 200) {
    return response.data;
  } else {
    return response.status;
  }
};
