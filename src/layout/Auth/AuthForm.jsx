import PropTypes from 'prop-types';
import './AuthForm.scss';

const AuthForm = ({ title, children, gapTitle }) => {
  return (
    <div
      className="auth"
      style={{
        rowGap: gapTitle,
      }}
    >
      <h1 className="auth__title">{title}</h1>
      <div className="auth__content">{children}</div>
    </div>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  gapTitle: PropTypes.string,
};
AuthForm.defaultProps = {
  title: '',
  children: null,
  gapTitle: '60px',
};

export default AuthForm;
