import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validatePasswordAndConfirmPassword } from '../../containts/validation/validation-schema.js';
import { updatePassword } from '../../containts/APIs/api-service-auth.js';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoadingContext } from '../../containts/context/LoadingProvider.jsx';

const NewPassword = () => {
  const navigate = useNavigate();
  const { hideLoading, showLoading } = useContext(LoadingContext);
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
        alert('thay doi thanh cong');
        navigate('/login');
      })
      .catch((error) => {
        hideLoading();
        console.error('Registration error:', error);
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
