import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmailAndPassword } from '../../containts/validation/validation-schema.js';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '../../containts/APIs/api-service-auth.js';
const Login = () => {
  const navigate = useNavigate();
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
  const handleSubmit = async ({email,password}) => {
    await SignIn(email,password).then(
      (res) => {
        if(res.verified){
          navigate('/');
        }else{
          navigate('/verify-email');
        }
      }
    ).catch(
      (error) => {
        console.error('Registration error:', error);
      }
    )
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
