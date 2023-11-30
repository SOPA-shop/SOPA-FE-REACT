import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validatePasswordAndConfirmPassword } from '../../containts/validation/validation-schema.js';
import { updatePassword } from '../../containts/APIs/api-service-auth.js';
import { useContext } from 'react';
import { EffectContext } from '../../containts/context/EffectProvider.jsx';

const NewPassword = () => {
  const { hideLoading, showLoading, messageNotification } =
    useContext(EffectContext);
  const fields = {
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: validatePasswordAndConfirmPassword,
    fieldValues: [
      {
        name: 'password',
        type: 'password',
        label: 'Password',
      },
      {
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
      },
    ],
  };
  const handleSubmit = async ({ password }) => {
    await showLoading();
    await updatePassword(password)
      .then(() => {
        hideLoading();
        messageNotification(
          'success',
          'Change password successfully',
          '/login',
        );
      })
      .catch((error) => {
        hideLoading();
        if (error.response.status === 401) {
          messageNotification('error', 'Invalid email or password');
        }
        if (error.response.status === 404) {
          messageNotification('error', 'Email not found');
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
      title="New Password"
    />
  );
};
export default NewPassword;
