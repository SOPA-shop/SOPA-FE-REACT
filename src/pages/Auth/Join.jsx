import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmailAndPassword } from '../../containts/validation/validation-schema.js';
import { registerUser } from '../../containts/APIs/api-service-auth.js';
import {
  setEmailToLocalStorage,
  setUserIdToLocalStorage,
} from '../../containts/local-storage-varibles.js';
import { useContext } from 'react';
import { EffectContext } from '../../containts/context/EffectProvider.jsx';

const Join = () => {
  const { hideLoading, showLoading, messageNotification } =
    useContext(EffectContext);
  const fields = {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateEmailAndPassword,
    fieldValues: [
      {
        name: 'email',
        type: 'email',
        label: 'Email address',
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
      },
    ],
  };

  const handleSubmit = async ({ email, password }) => {
    await showLoading();
    await registerUser(email, password)
      .then((userId) => {
        setEmailToLocalStorage(email);
        setUserIdToLocalStorage(userId);
        hideLoading();
        messageNotification(
          'success',
          'Register successfully',
          '/verify-email',
        );
      })
      .catch((error) => {
        hideLoading();
        if (error.response.status === 409) {
          messageNotification('error', 'Email already exists');
        }
        if (error.response.status === 400) {
          messageNotification('error', 'Invalid email or password');
        }
      });
  };
  return (
    <AuthFormWithInputField
      buttonName="Create Account"
      linkTo="/login"
      getValues={handleSubmit}
      contentNavigator="Already have an account?"
      contentLink="Sign in"
      fields={fields}
      title="Create an account"
    />
  );
};
export default Join;
