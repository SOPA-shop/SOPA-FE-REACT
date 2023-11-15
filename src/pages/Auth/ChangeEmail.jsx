import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmail } from '../../containts/validation/validation-schema.js';
import { changeEmail} from '../../containts/APIs/api-service-auth.js';
import { useNavigate } from 'react-router-dom';

const ChangeEmail = () => {
  const navigate = useNavigate();
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
      }
    ],
  };
  const handleSubmit =async ( {email} ) => {
    await changeEmail(email).then(() =>{
      navigate('/verify-email')
    }
    ).catch(
      (error) => {
        console.error('Registration error:', error);
      }
    )
  };

  return (
    <AuthFormWithInputField
      buttonName='Change'
      linkTo='/join'
      getValues={ handleSubmit }
      contentNavigator='Already have an account?'
      contentLink='Sign in'
      fields={ fields }
      title='Edit email'
    />
  );
};
export default ChangeEmail;
