import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import validateEmailAndPassword from '../../containts/validation/validation-schema.js';

const Join = () => {
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
  const handleSubmit = (values) => {
    console.log(values);
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
