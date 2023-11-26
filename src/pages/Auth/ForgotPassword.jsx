import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmail } from '../../containts/validation/validation-schema.js';
import { resetPassword } from '../../containts/APIs/api-service-auth.js';
import { useNavigate } from 'react-router-dom';
import {
  ClearEmailFromLocalStorage,
  setAvailableAccountToLocalStorage,
  setEmailToLocalStorage,
  setUserIdToLocalStorage,
} from '../../containts/local-storage-varibles.js';
import { useContext } from 'react';
import { LoadingContext } from '../../containts/context/LoadingProvider.jsx';

const ChangeEmail = () => {
  const navigate = useNavigate();
  const { hideLoading, showLoading } = useContext(LoadingContext);
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
        if (available) {
          setUserIdToLocalStorage(userId);
          ClearEmailFromLocalStorage(values?.email);
          setEmailToLocalStorage(values.email);
          setAvailableAccountToLocalStorage(available);
          navigate('/verify-email');
        } else {
          alert('loi');
        }
        hideLoading();
      })
      .catch((error) => {
        hideLoading();
        console.error('Registration error:', error);
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
