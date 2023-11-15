import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import {
  validatePasswordAndConfirmPassword
} from '../../containts/validation/validation-schema.js';
import { updatePassword } from '../../containts/APIs/api-service-auth.js';
import { useNavigate } from 'react-router-dom';
const NewPassword = () => {
  const navigate = useNavigate();
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
  const handleSubmit = async ({password}) => {
    await updatePassword(password).then(
      () => {
        alert('thay doi thanh cong')
        navigate('/login');
      }
    ).catch(
      (error) => {
        console.error('Registration error:', error);
      }
    )
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
