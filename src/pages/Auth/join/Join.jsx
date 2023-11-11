import AuthForm from '../../../layout/Auth/AuthForm.jsx'
import { Field, Form, Formik } from 'formik'
import BaseInputText from '../../../component/BaseInputText.jsx'
import validateEmailAndPassword from '../../../containts/validation/validation-schema.js'
import './Join.scss'
import ButtonWithText from '../../../component/button/ButtonWithText.jsx'
import { Link } from 'react-router-dom'

const Join = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{
        emailAddress: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validateEmailAndPassword}
    >
      {(props) => (
        <AuthForm title="Create an Account.">
          <div className="join__content">
            <Form className="join__form" onSubmit={props.handleSubmit}>
              <Field
                name="emailAddress"
                type="email"
                as={BaseInputText}
                label="Email"
                onBlur={() => props.setFieldTouched('emailAddress', true)}
                helperText={
                  props.touched.emailAddress && props.errors.emailAddress
                }
              />
              <Field
                name="password"
                type="password"
                as={BaseInputText}
                label="password"
                onBlur={() => props.setFieldTouched('password', true)}
                helperText={props.touched.password && props.errors.password}
              />
              <ButtonWithText content="Create Account" type="submit" />
            </Form>
            <div className="join__navigator">
              <span>Already have an account?</span>
              <Link to="/login">Sign in</Link>
            </div>
          </div>
        </AuthForm>
      )}
    </Formik>
  )
}
export default Join
