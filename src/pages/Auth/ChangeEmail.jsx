import AuthFormWithInputField from '../../component/AuthForm/AuthFormWithInputField.jsx';
import { validateEmail } from '../../containts/validation/validation-schema.js';
import { changeEmail } from '../../containts/APIs/api-service-auth.js';
import { useContext } from 'react';
import { EffectContext } from '../../containts/context/EffectProvider.jsx';

const ChangeEmail = () => {
  const { hideLoading, showLoading, messageNotification } =
    useContext(EffectContext);

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
        messageNotification(
          'success',
          'Change email successfully',
          '/verify-email',
        );
      })
      .catch((error) => {
        hideLoading();
        if (error.response.status === 404) {
          messageNotification('error', 'Email not found');
        }
        if (error.response.status === 401) {
          messageNotification('error', 'Invalid email or password');
        }
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
