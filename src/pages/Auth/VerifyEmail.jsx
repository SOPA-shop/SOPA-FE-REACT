import {
  getEmailFromLocalStorage,
  getUserIdFromLocalStorage,
} from '../../containts/local-storage-varibles.js';
import { Field, Form, Formik } from 'formik';
import AuthForm from '../../layout/Auth/AuthForm.jsx';
import BaseInputText from '../../component/BaseInputText.jsx';
import ButtonWithText from '../../component/button/ButtonWithText.jsx';
import { Link } from 'react-router-dom';
import { validateOTP } from '../../containts/validation/validation-schema.js';
import './scss/VerifyEmail.scss';
import { sendSubmitOTP } from '../../containts/APIs/api-service-auth.js';

const VerifyEmail = () => {
  const userId = getUserIdFromLocalStorage();
  const currentEmail = getEmailFromLocalStorage();
  const handleVerifyEmail = async (values) => {
    await sendSubmitOTP(userId, values.OTP);
  };
  return (
    <Formik
      initialValues={{
        OTP: '',
      }}
      validationSchema={validateOTP}
      onSubmit={handleVerifyEmail}
    >
      {(props) => (
        <AuthForm title="Verify your email" gapTitle="32px">
          <div className="verify-email">
            <div className="verify-email__content">
              <div className="verify-email__content__title">Code send!</div>
              <div className="verify-email__content__sub-title">
                We send a verification code to{' '}
                <span className="verify-email__content__sub-title__email">
                  {currentEmail}
                </span>{' '}
                enter it below.
              </div>
            </div>
            <Form className="verify-email__form">
              <div className="verify-email__form__content">
                <Field
                  name="OTP"
                  type="text"
                  as={BaseInputText}
                  label="Code"
                  inputProps={{ maxLength: 6 }}
                  onBlur={() => props.setFieldTouched('OTP', true)}
                  helperText={props.touched.OTP && props.errors.OTP}
                />
                <ButtonWithText content="Verify" type="submit" />
              </div>
              <div className="verify-email__form__navigator">
                <div className="verify-email__form__navigator__content">
                  Change your e-mail
                </div>
                <Link
                  to="/edit-email"
                  className="verify-email__form__navigator__link"
                >
                  Change email
                </Link>
              </div>
            </Form>
          </div>
        </AuthForm>
      )}
    </Formik>
  );
};

export default VerifyEmail;
