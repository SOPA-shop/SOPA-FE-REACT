import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmail } from '../../containts/validation/validation-schema.js';
import { resetPassword } from '../../containts/APIs/api-service-auth.js';
import {
  ClearEmailFromLocalStorage,
  setAvailableAccountToLocalStorage,
  setEmailToLocalStorage,
  setUserIdToLocalStorage,
} from '../../containts/local-storage-varibles.js';
import { useContext } from 'react';
import { EffectContext } from '../../containts/context/EffectProvider.jsx';

const ChangeEmail = () => {
  const { hideLoading, showLoading, messageNotification } =
    useContext(EffectContext);
  const fields = {
    initialValues: {
      email: '',
    },
    validationSchema: validateEmail,
    fieldValues: [
      {
        name: 'email',
        type: 'email',
        label: 'Email address',
      },
    ],
  };

  const handleSubmit = async (values) => {
    await showLoading();
    await resetPassword(values.email)
      .then(({ userId, available }) => {
        hideLoading();
        if (available) {
          setUserIdToLocalStorage(userId);
          ClearEmailFromLocalStorage(values?.email);
          setEmailToLocalStorage(values.email);
          setAvailableAccountToLocalStorage(available);
          messageNotification(
            'success',
            'Email verified successfully, please send OTP',
            '/verify-email',
          );
        }
      })
      .catch((error) => {
        hideLoading();
        if (error.response.status === 404) {
          messageNotification('error', 'Email not found');
        }
      });
  };
  return (
    <AuthFormWithInputField
      buttonName="Confirm"
      linkTo="/join"
      getValues={handleSubmit}
      contentNavigator="Already have an account?"
      contentLink="Sign in"
      fields={fields}
      title="Enter your email "
    />
  );
};
export default ChangeEmail;
