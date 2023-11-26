import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmailAndPassword } from '../../containts/validation/validation-schema.js';
import { registerUser } from '../../containts/APIs/api-service-auth.js';
import { useNavigate } from 'react-router-dom';
import {
  setEmailToLocalStorage,
  setUserIdToLocalStorage,
} from '../../containts/local-storage-varibles.js';
import { useContext } from 'react';
import { LoadingContext } from '../../containts/context/LoadingProvider.jsx';

const Join = () => {
  const navigate = useNavigate();
  const { hideLoading, showLoading } = useContext(LoadingContext);
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
        navigate('/verify-email');
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
      title="Create an account"
    />
  );
};
export default Join;
