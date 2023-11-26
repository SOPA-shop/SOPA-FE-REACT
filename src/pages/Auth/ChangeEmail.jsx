import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmail } from '../../containts/validation/validation-schema.js';
import { changeEmail } from '../../containts/APIs/api-service-auth.js';
import { useNavigate } from 'react-router-dom';
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
  const handleSubmit = async ({ email }) => {
    await showLoading();
    await changeEmail(email)
      .then(() => {
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
      buttonName="Change"
      linkTo="/join"
      getValues={handleSubmit}
      contentNavigator="Already have an account?"
      contentLink="Sign in"
      fields={fields}
      title="Edit email"
    />
  );
};
export default ChangeEmail;
