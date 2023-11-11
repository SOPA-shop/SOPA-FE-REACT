import PropTypes from 'prop-types'
import './AuthForm.scss'

const AuthForm = ({ title, children }) => {
  return (
    <div className="auth">
      <h1 className="auth__title">{title}</h1>
      <div className="auth__content">{children}</div>
    </div>
  )
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default AuthForm
