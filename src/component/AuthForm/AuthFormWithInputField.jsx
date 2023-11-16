import { Field, Form, Formik } from 'formik';
import AuthForm from '../../layout/Auth/AuthForm.jsx';
import BaseInputText from '../BaseInputText.jsx';
import ButtonWithText from '../button/ButtonWithText.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './scss/AuthFormWithInputText.scss';

const AuthFormWithInputField = ({
  fields,
  title,
  contentNavigator,
  contentLink,
  linkTo,
  buttonName,
  getValues,
}) => {
  const handleSubmit = (values) => {
    getValues(values);
  };
  return (
    <Formik
      initialValues={fields.initialValues}
      onSubmit={handleSubmit}
      validationSchema={fields.validationSchema}
    >
      {(props) => (
        <AuthForm title={title}>
          <div className="auth-form-with-input-field">
            <Form
              className="auth-form-with-input-field__form"
              onSubmit={props.handleSubmit}
            >
              {fields.fieldValues.map((value, index) => (
                <Field
                  key={index}
                  name={value.name}
                  type={value.type}
                  as={BaseInputText}
                  label={value.label}
                  onBlur={() => props.setFieldTouched(name, true)}
                  helperText={
                    props.touched[value.name] && props.errors[value.name]
                  }
                />
              ))}
              <ButtonWithText content={buttonName} type="submit" />
            </Form>
            <div className="auth-form-with-input-field__navigator">
              <div className="navigator-content">
                <span>{contentNavigator}</span>
                <Link to={linkTo} className="navigator-content__link">
                  {contentLink}
                </Link>
              </div>
              {
                buttonName ==='Change'?
                  <Link to="/verify-email" className="navigator-forgot">
                  Go back
                  </Link>:
                  <Link to="/forgot-password" className="navigator-forgot">
                    Forgot password?
                  </Link>
              }
            </div>
          </div>
        </AuthForm>
      )}
    </Formik>
  );
};

AuthFormWithInputField.propTypes = {
  fields: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  contentNavigator: PropTypes.string.isRequired,
  contentLink: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  getValues: PropTypes.func.isRequired,
};
export default AuthFormWithInputField;
