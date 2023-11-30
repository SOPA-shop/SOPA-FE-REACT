import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmailAndPassword } from '../../containts/validation/validation-schema.js';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '../../containts/APIs/api-service-auth.js';
import { useContext } from 'react';
import { EffectContext } from '../../containts/context/EffectProvider.jsx';
import {
  setEmailToLocalStorage,
  setRoleToLocalStorage,
  setTokenToLocalStorage,
  setUserIdToLocalStorage,
} from '../../containts/local-storage-varibles.js';

const Login = () => {
  const navigate = useNavigate();
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
    await SignIn(email, password)
      .then((response) => {
        const { accessToken, email, role, userId, verified } = response;
        setEmailToLocalStorage(email);
        setUserIdToLocalStorage(userId);
        setTokenToLocalStorage(accessToken);
        setRoleToLocalStorage(role);
        hideLoading();
        if (verified) {
          hideLoading();
          messageNotification('success', 'Login successfully', '/');
        } else {
          navigate('/verify-email');
        }
      })
      .catch((error) => {
        hideLoading();
        if (error.response.status === 401) {
          messageNotification('error', 'Invalid email or password');
        }
      });
  };

  return (
    <AuthFormWithInputField
      buttonName="Login"
      linkTo="/join"
      getValues={handleSubmit}
      contentNavigator="New to Sopa?"
      contentLink="Create an account"
      fields={fields}
      title="Sign in"
    />
  );
};
export default Login;
