import PropTypes from 'prop-types'

const ButtonWithText = ({ content, ...props }) => {
  return (
    <button
      style={{
        width: '100%',
        height: 'max-content',
        border: 'none',
        padding: '17px 24px',
        borderRadius: '32px',
        textAlign: 'center',
        backgroundColor: '#02021D',
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '22px',
        cursor: 'pointer',
      }}
      {...props}
    >
      {content}
    </button>
  )
}
ButtonWithText.propTypes = {
  content: PropTypes.string.isRequired,
}
export default ButtonWithText
