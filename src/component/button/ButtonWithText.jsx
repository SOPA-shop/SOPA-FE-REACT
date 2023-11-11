import PropTypes from 'prop-types'
import './ButtonWithText.scss'

const ButtonWithText = ({ content, ...props }) => {
  return (
    <button className="button-with-text" {...props}>
      {content}
    </button>
  )
}
ButtonWithText.propTypes = {
  content: PropTypes.string.isRequired,
}
export default ButtonWithText
